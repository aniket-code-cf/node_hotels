const mongoose=require('mongoose');

const personSchema= new mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    age:
    {
        type:Number
    },
    work:
    {
        type:String,
        enum:['chef','manager','waiter'],
        required:true
    },
    salary:
    {
        type:Number,
        required:true
    },
    email:
    {
        type:String,
        required:true,
        unique:true

    },
    mobile:
    {
        type:String,
        required:true
    },
    address:
    {
        type:String
    }



}

)

const Person1=mongoose.model('Person1',personSchema);

module.exports=Person1;