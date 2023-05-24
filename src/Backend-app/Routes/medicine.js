const express = require("express")
const fetchuser = require("../middleware/fetchuser")
const router = express.Router()
const Medicines = require("../Modules/Medicines")
const { body, validationResult } = require('express-validator');
const { findById, findByIdAndUpdate } = require("../Modules/Medicines");
var mongoose = require('mongoose');


// route to Add a new medicine USING POST
router.get("/fetchallmedicines", fetchuser, async (req, res) => {

    const meds = await Medicines.find({ User: req.user.id })
    res.json(meds);


})

router.post("/addmedicines",fetchuser,[
    body('MedicineName', "invalid  Name").isLength({ min: 5 }),
    body('Drugname', "invalid  Name").isLength({ min: 4 }),
    body('Size', "invalid  Size").isLength({ min: 2 }),
    body('Manufacture', "invalid  name").isLength({ min: 3 }),
    body('Category', "invalid  Category").isLength({ min: 4 }),
    body('Price', "invalid  price").isNumeric(),
    body('Quantity', "invalid  Quantity").isInt({ min: 1, max: 100 }),
    

], async (req, res) => {
    try {
        const errors = validationResult(req);

       

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { MedicineName,Drugname,Size,Manufacture,Category, Price, Quantity, ExpiryDate, myFile } = req.body;

        console.log(req.user.id);

        const userId = req.user.id;
        const medicine = new Medicines({

           MedicineName,Drugname,Size,Manufacture,Category, Price, Quantity, ExpiryDate, myFile , User: userId
          

        })
        const savedmedicine = await medicine.save()


        res.json(savedmedicine)
    } catch {
        console.error(error.message)
        res.status(500).send("Internal server error");

    }





})


// Update an existing medicine using Post and Login is Required.
router.put("/updatemedicines/:id",fetchuser,async (req, res) => {
   
        

        const { MedicineName, Drugname , Size , Manufacture , Category , Price , Quantity , ExpiryDate , myFile  } = req.body;
        const newMedicine={};
        if(MedicineName){
            newMedicine.MedicineName = MedicineName;
        }
        if(Category){
            newMedicine.Category = Category;
            
        }
        if(Price){
            newMedicine.Price = Price;

        }
        if(Quantity){
            newMedicine.Quantity = Quantity;

        }
        if(Drugname){
            newMedicine.Drugname = Drugname;

        }
        if(Size){
            newMedicine.Size = Size;

        }
        if(Manufacture){
            newMedicine.Manufacture = Manufacture;

        }
        if(ExpiryDate){
            newMedicine.ExpiryDate = ExpiryDate;

        }
        if(myFile){
            newMedicine.myFile = myFile;

        }
        if( !mongoose.Types.ObjectId.isValid(req.params.id) ) return false;
        
        let med = await Medicines.findByIdAndUpdate(req.params.id,{$set:newMedicine}, {new:true});
        
        if (!med) {
            return res.status(404).json("Medicine Not Found");
        }
        console.log(med.User)

        if (med.User.toString() !== req.user.id){
            return res.status(400).send("Access Denied")
        }
        
        
        res.json({med});

        


       



})
// ROUTE 4: Delete an existing medicine using: DELETE "/api/medicine/deletenote". Login required
router.delete('/deletemed/:id', fetchuser, async (req, res) => {
    try {
        // Find the med to be deleted and delete it
        let med = await Medicines.findById(req.params.id);
        if (!med) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns this Note
        if (med.User.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        med = await Medicines.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", medicine: med });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router;
