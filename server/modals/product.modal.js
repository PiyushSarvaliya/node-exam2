const mongoose = require("mongoose")


const productschema = new mongoose.Schema({
    title : String,
    des : String,
    img : String,
    price : Number
})

const product = mongoose.model("product" , productschema)

module.exports = product