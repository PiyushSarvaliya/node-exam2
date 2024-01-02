const {Router} = require("express")
const { register, login } = require("../controllers/user.controller")
const Uroute = Router()

Uroute.post("/register" , register)
Uroute.post("/login" , login)
module.exports = Uroute