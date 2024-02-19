const mongoose=require('mongoose');
require('dotenv').config();




//const mongoDBURL=process.env.mongoDB_URL_LOCAL;
const mongoDBURL=process.env.MONGODB_URL;



mongoose.connect(mongoDBURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connection;

db.on('connected',()=>{
    console.log('connected');
});

db.on('error',(err)=>{
    console.log('Mongodb connection errror',err);
});
db.on('disconnected',()=>{
    console.log('disconnected');
});

module.exports=db;




