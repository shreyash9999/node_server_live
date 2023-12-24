const product = require('../models/product')


exports.getAllProducts = async (req, res) => {
    const myData = await product.find(req.query);
    res.status(200).json({ message: myData });
};

exports.getAllProductsTest = async(req,res)=>{
    res.status(200).json({ message: myData });

}