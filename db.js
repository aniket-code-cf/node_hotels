const mongoose=require('mongoose');




const mongoURL='mongodb://0.0.0.0:27017/hotels';

mongoose.connect(mongoURL,{
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




