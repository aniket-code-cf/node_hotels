const express=require('express');

const router=express.Router();
const Person1=require('./../models/Person1');

router.post('/',async(req,res)=>{
    try{

        const data=req.body;

        const newPerson=new Person1(data);

        const response=await newPerson.save();
        console.log('Data save succssfully');
        res.status(200).json(response);


    }catch(err)
    {
        console.log('internal server error',err);
        res.status(500).json({error:'internal server error'});
    }

   


})

router.get('/',async(req,res)=>{
    try{
        const data=await Person1.find();
        console.log('data fetched');
        res.status(200).json(data);
      


    }
    catch(err)
    {
        console.log('Inetrnal server error',err);
        res.status(500).json({error:'internal server error'});

    }


})

router.get('/:workType',async(req,res)=>{
    try{
        const workType=req.params.workType;
        if(workType=="chef"||workType=="manager"||workType=="waiter")
        {
            const response=await Person1.find({work:workType});
            console.log('data fetched');
            res.status(200).json(response);

        }
        else
        {
            res.status(500).json({error:"invalid work type"});
        }




    }
    catch(error)
    {
        console.log('Invalid data',err);
        res.status(500).json({error:'invalid data'});

    }




})
router.put('/:id',async(req,res)=>{
    try
    {
        const personId=req.params.id;
        const updatedPerson=req.body;

        const response=await Person1.findByIdAndUpdate(personId,updatedPerson,
            {
                new:true,
                runValidators:true,

            });
        
        if(!response)
        {
            console.log('person id not found');
            res.status(404).json({error:'invalid id'});
        }
        console.log('updated data');
        res.status(200).json(response);


    }
    catch(err)
    {
        console.log('Invalid data',err);
        res.status(500).json({error:'invalid data'});

    }


})

router.delete('/:id',async(req,res)=>
{
    try
    {
    const deletedPerson=req.params.id;

    const response=await Person1.findByIdAndDelete(deletedPerson);
    if(!response)
    {
        console.log('invalid id');
        res.status(500).json({error:'invalid id'});
    }

    console.log('Deleted successfully');
    res.status(200).json({error:'Person deleted successfully'});
}
catch(err)
{
    console.log('inavlid id');
    res.status(400).json({error:'internal server error'});
}




})





module.exports=router;