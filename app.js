require('./db/connect');
const express = require('express');
const app = express();
const products = require('./routes/products');
const connectDB = require('./db/connect');
require('dotenv').config();
const { errorHandler } = require('./middleware/error-handler');
const { notFound } = require('./middleware/notfound');

// middleware
app.use('/', errorHandler)
app.use(express.json());
app.use('/api/v1/products',products);
app.use(express.static('public'));

app.use('/', notFound);

// routes
// app.get('/',(req, res) => {
//     res.sendFile('index.html');
// });

const port = 5555

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI, port);
        app.listen(port, console.log("\x1b[36m", `Listening on port ${port}...`));
    } catch(err){console.error(err)}
}

start();