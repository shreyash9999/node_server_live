require('dotenv').config();
const express = require('express');

const productRoutes = require('./routes/products');
const connectDB = require('./db/connect');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('Hi, I am live');
});

const start = async ()=>{
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
            console.log(`${PORT} yea Im connected`);
        });
    }catch(err){
        console.error(err);
    }
}

start();