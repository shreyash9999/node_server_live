const mongoose = require('mongoose');


const connectDB = (uri)=>{
    console.log('db connected')
    return mongoose.connect(uri);
}

module.exports = connectDB;