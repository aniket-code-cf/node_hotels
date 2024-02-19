const express=require('express');

const router=express.Router();
const MenuItem=require('./../models/MenuItem');

router.post('/',async(req,res)=>{
    try{
       const menuData=req.body;

       const newMenu=new MenuItem(menuData);

       const resp=await newMenu.save();
       console.log('Data svaed successfully');
       res.status(200).json(resp);

    }
    catch(err)
    {

       console.log('Internal server error',err);
       res.status(500).json({error:'internla server error'});
    }


})

router.get('/',async(req,res)=>{
   try
   {
       const fetchdata=await MenuItem.find();
       console.log("fetch data");
       res.status(200).json(fetchdata);
   }
   catch(err)
   {
       console.log('Internal server error',err);
       res.status(500).json({error:'internla server error'});
   }
})

router.get('/:tasteType',async(req,res)=>{
    try
    {
        const tasteType=req.params.tasteType;
        const fetchdata=await MenuItem.find({taste:tasteType});
        console.log("fetch data");
        res.status(200).json(fetchdata);
    }
    catch(err)
    {
        console.log('Internal server error',err);
        res.status(500).json({error:'internla server error'});
    }
 })
 
 router.put('/:id',async(req,res)=>
 {
    try
    {
        const menuId=req.params.id;
        const updatedMenu=req.body;
        const response=await MenuItem.findByIdAndUpdate(menuId,updatedMenu,
            {
                new:true,//run updated person
                runValidators:true,  //validation mongoose
            })

            if(!response)
            {
                console.log('inavlid id');
                res.status(500).json({error:'inavlid id'});
            }
            console.log('Updated data');
            res.status(200).json(response);

    }
    catch(err)
    {
        console.log('internal server error');
        res.status(404).json({error:'internal server error'});

    }





 })

 router.delete('/:id',async(req,res)=>
 {
    try{

        const menuId=req.params.id;
        const response=await MenuItem.findByIdAndUpdate(menuId);

        if(!response)
        {
            console.log('menu id notfound');
            res.status(500).json({error:'menu id not found'});
        }
        console.log('Menu Deleted successfully');
        res.status(200).json({message:'Menu Deleted successfully'});


    }
    catch(err)
    {
        console.log('internal server error');
        res.status(404).json({error:'internal server error'});
    }

 })



//comment
module.exports=router;