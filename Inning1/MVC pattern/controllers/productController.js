const Product = require('../model/productModel');


     //Business logic

//1.View or Read
const getProduct = async (req,res) =>{
     try{
        const allProducts = await Product.find();
        if(!allProducts  || allProducts.length == 0){
            res.json({
                message:"There is No Product"
            })
        }

        //if we have prodt >1

        res.status(200).json({
            success:true,
            products:allProducts,
        })

     }catch(err){
        res.status(500).json({
            success:false,
            message:"Internel Server Error"
        })
     }
}


//2.Create

const createproduct = async (req,res) =>{
    try{
        const{name,price,desc,cat}  = req.body;
        const  newProduct = new Product({name,price,desc,cat});
        await newProduct.save();
        res.status(200).json({
            product: newProduct   //returning the newly created product
        })

           
    }catch(error){
              res.status(500).json({
                success:false,
                message:"Internel Server Error"
              })
    }
}

//3.Update 


const Updateproducts =  async(req,res) =>{
    try{
        console.log("put ki req");
        const{id} = req.params;
        const{name,price,desc,cat} =req.body;
        const  updateproduct = await Product.findByIdAndUpdate(id,{name,price,desc,cat},{new:true});  //new true se naya product milti hai ahi to wahi prai eali hi milei 
        res.status(200).json({
            product:updateproduct
        })


    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}


//4.delete

  const deleteProduct = async(req,res) =>{
    try{
        const{id} = req.params;
      const deleteProduct =await Product.findByIdAndDelete(id);
      
      if(!deleteProduct){
        res.json({
            message:"product not dfound , can't be delete"
        })
      }

    res.status(200).json({
        message:"Product Deleted Successfully",
      product:deleteProduct
    })

    }catch(error){
        res.status(500).json({
            success:false,
            message:"Internal server error"
        })  
    }
  }


module.exports = {getProduct,Updateproducts,createproduct,deleteProduct};
