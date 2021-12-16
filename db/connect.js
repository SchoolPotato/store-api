const mongoose = require('mongoose');

const connectDB = (url, port) => {
    mongoose
    .connect(url)
    .then(()=>{console.clear(); console.log("\x1b[32m", `CONNECTED`, "\x1b[36m", `\n Listening on port ${port}...`, "\x1b[0m")})
    .catch((err) => {console.error(err)});
}

module.exports = connectDB;