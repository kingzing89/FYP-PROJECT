const mongoose = require('mongoose');
const { Schema } = mongoose;

const MedicinesSchema = new Schema({

 

   MedicineName: {
      type: String,
      require: true

   },
   Drugname:{
      type:String,
      require:true
   },
   Size:{
      type:String,
      require:true
   },
   Manufacture:{
      type:String,
      require:true
   },
   Category: {
      type: String,
      require: true,
      default: "General"
   },
   Price: {
      type: Number,
      required: true,


   },
   Quantity: {
      type: Number,
      required: true,
   },
   ExpiryDate:{
      type:Date,
      require:true
   },

   myFile: {
      type: String,
  },


   User: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
   }


});



const Medicines = mongoose.model("medicines", MedicinesSchema);
module.exports = Medicines;