const Product = require('./models/product');
const data = require('./data.json');
const connectDB = require("./db/connect");
const mongoose = require("mongoose");
require('dotenv').config();

let count = 0;

const loading = (percent) => {
    let arr = [];

    for(i = 0; i < 100/2; i++){
        arr.push("-");
    }
    let temp = count/percent;
    for(i=0; i < (temp * 100) / 2; i++){
        arr[i] = "■"
    }
    console.clear();
    
    return `[${arr.join('')}]${temp*100}%`;
}

const populate = async (data, req, res) => {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await data.map(async (item) => {
        const product = await Product.create(item);
        console.log("\x1b[32m", loading(data.length - 1), "\x1b[0m");
        count++
    });
    setTimeout(() => {mongoose.disconnect(); console.clear(); console.log("\x1b[36m", "[■■■■■■■■■■■■■■■■■■■■ FINISHED ■■■■■■■■■■■■■■■■■■■■]100%", "\x1b[0m")}, 1600);
    setTimeout(() => {console.clear();}, 2000);
}

populate(data);