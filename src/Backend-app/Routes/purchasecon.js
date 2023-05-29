const Orders = require("../Modules/Order")
const Medicine = require("../Modules/Medicines")
var mongoose = require('mongoose');
const express= require("express");
const  router= express.Router();
const fetchuser = require("../middleware/fetchuser")


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