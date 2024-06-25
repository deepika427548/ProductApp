const productModel=require("../models/product");

const addProduct= async(req,res)=>{
    const data=req.body;
    const newData=new productModel(data);
    if(!newData) throw new error(400,error);
    await newData.save();
    res.status(200).send({message: "Data is saved successfully"});
}
//get all data
const getAllProduct=async(req,res)=>{

    const allData=await productModel.find({});
    res.status(200).send({data:allData,message:"ok"});
}

//get product by id

const getById=async(req,res)=>{
     
    const id=req.params.id
    const data=await productModel.findById(id);
    res.status(200).send({data:data,message:"ok"})
}

//Delete a product

const deleteProduct=async(req,res)=>{
    const id=req.params.id;
    const data=await productModel.findByIdAndDelete(id);
    res.status(200).send({message:"data is deleted successfully"});
}

//update product details

const updateProduct=async(req,res)=>{
    const id=req.params.id;
    const newData=req.body;
    await productModel.findByIdAndUpdate(id,newData);
    res.status(200).send({message:"Product details updated successfully"})


}

module.exports={addProduct,getAllProduct,getById,deleteProduct,updateProduct};