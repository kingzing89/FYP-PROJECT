const mongoose = require('mongoose');
const { Schema } = mongoose;

const MedicinesSchema = new Schema({

 

   medicinename: {
      type: String,
      require: true

   },
   drugname:{
      type:String,
      require:true
   },
   size:{
      type:String,
      require:true
   },
   manufacture:{
      type:String,
      require:true
   },
   category: {
      type: String,
      require: true,
      default: "General"
   },
   price: {
      type: Number,
      required: true,


   },
   quantity: {
      type: Number,
      required: true,
   },
   expirydate:{
      type:Date,
      require:true
   },

   myFile: {
      type: String,
  },


   shopuser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'shopuser'
   }


});



const Medicines = mongoose.model("medicines", MedicinesSchema);
module.exports = Medicines;