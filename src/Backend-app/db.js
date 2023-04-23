const moongose= require('mongoose');

const mongoURI="mongodb://127.0.0.1:27017/inotebook";

const connectToMongo=()=>{
    moongose.connect(mongoURI,()=>{
    
        console.log("Connected to MongoDB");

        
    })


}

module.exports=connectToMongo;