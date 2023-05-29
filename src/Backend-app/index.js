
const connectToMongo = require('./db');
const express = require('express');
const { Router } = require('express');
connectToMongo();


const app = express();
const multer = require("multer");
const cors = require("cors");
app.use(cors());

const port = 5000;

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../../public');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
})

var upload = multer({ storage: storage }).fields([{name: "Image"}, {name: "Image2"}]);


app.post('/upload', (req, res) => {

  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      console.log(err);
      return res.status(500).json(err)
     
    }

   
    var path = req.files;
    res.send(path);

  })






})





app.use(express.json())

app.use("/api/auth",require("./Routes/auth"));
app.use("/api/medicine",require("./Routes/medicine"));
app.use("/api/shopcon",require("./Routes/shopcon"));
app.use("/api/purchasecon",require("./Routes/purchasecon"));



app.listen(port, () => {
  console.log(`Medicine Backend-app listening on${port}`)
})

