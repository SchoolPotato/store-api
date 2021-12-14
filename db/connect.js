const mongoose = require('mongoose');
require("dotenv");

const connectionString = MONGO_URI

const connectDB = (url) => {
    mongoose
    .connect(url)
    .then(()=>{console.log('CONNECTED')})
    .catch((err) => {console.error(err)});
}

module.exports = connectDB;