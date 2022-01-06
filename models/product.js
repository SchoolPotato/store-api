const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Must Provide Task Name"],
        trim: true,
        maxlength: [50,'Name Must Be Under 50 Characters']
    },
    price:{
        type: Number,
        required: [true, "Must provide price"]
    },
    featured:{
        type: Boolean,
        default: false
    },
    rating:{
        type: Number,
        required: [true, "Must provide rating"]
    },
    createdAtDate:{
        type:Date,
        default: new Date()
    },
    companyString:{
        type:String,
        required: [true, "Must provide company string"],
        enum: ["Nike", "Adidas", "Bata", "Terracycle"],
        maxlength: [50, 'Company string must be under 50 characters']
    },
    desc:{
        type:String,
        required: [true, "Must provide description"],
        maxlength: [1024, "Description must be under 1024"]
    }
});

// This is basic validation not advanced
module.exports = mongoose.model("Product", ProductSchema);