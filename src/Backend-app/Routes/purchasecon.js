const Orders = require("../Modules/Order")
const Medicine = require("../Modules/Medicines")
var mongoose = require('mongoose');
const express= require("express");
const  router= express.Router();
const fetchuser = require("../middleware/fetchuser")


router.post("/addorder",fetchuser,async(req,res)=>{

    const {MedicineName,quantity,deliveryaddress}=req.body
    try {
      console.log(req.user.id);

       
        

        const Medicines = await Medicine.find({User: req.user.id,MedicineName:MedicineName});

        if(Medicines.Quantity > quantity)
        {   let quant=Medicines.Quantity-quantity;
            console.log(quant)
            med= await Medicine.findOneAndUpdate({_id:Medicines._id},{Quantity:quant}, {new: true,upsert: true})
            console.log(med)
            const savedorder = await order.save();
            res.json(savedorder)
            
           
        }
       


    
    } catch {
        
        res.status(500).send("Internal server error");

    }

    
})
router.get("/fetchallorders",fetchuser,async(req,res)=>{
   
    try {
      const order = await Orders.find({User: req.user.id});
      console.log(order)
      res.status(200).json(order)
      if(!order)
    {
        throw Error("Shop don't Exist")
    }
    } catch (error) {
      res.status(400).json({error: error.message})
    }
})

module.exports=router