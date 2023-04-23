

const connectToMongo = require('./db');
const express = require('express');
const { Router } = require('express');
connectToMongo();

const app = express()
const cors= require("cors");
app.use(cors());

const port = 5000

app.use(express.json())

app.use("/api/auth",require("./Routes/auth"));
app.use("/api/medicine",require("./Routes/medicine"));


app.listen(port, () => {
  console.log(`Medicine Backend-app listening on${port}`)
})

