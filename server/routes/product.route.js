const {Router} = require("express")
const { addproduct, allproduct, pay } = require("../controllers/product.controller")
const Proute = Router()

Proute.post("/productadd" , addproduct)
Proute.get("/allproduct" , allproduct)
Proute.post("/payment" , pay)



module.exports = Proute