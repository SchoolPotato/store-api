const mongoose = require('mongoose');

const connectDB = (url) => {
    mongoose
    .connect(url)
    .then(()=>{console.log('CONNECTED')})
    .catch((err) => {console.error(err)});
}

module.exports = connectDB;