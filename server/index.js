const express = require("express")
const connect = require("./config/db")
const cors = require("cors")
const cookie = require("cookie-parser")
const Uroute = require("./routes/user.route")
const Proute = require("./routes/product.route")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())
app.use(cookie())
app.use("/user",Uroute)
app.use(Proute)

app.listen(8090 , () =>{
    connect()
    console.log("port is start 8090")
})