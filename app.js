require('./db/connect');
const express = require('express');
const app = express();
const products = require('./routes/products');
const connectDB = require('./db/connect');
require('dotenv').config();

// middleware
app.use(express.json());
app.use('/api/v1/products',products);
app.use(express.static('public'));
const { populate, data } = require('./populate');

// routes
// app.get('/',(req, res) => {
//     res.sendFile('index.html');
// });

const port = 5555

if(!process.env.POPULATED) {populate(data);}

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Listening on port ${port}...`));
    } catch(err){console.log(err)}
}

start();