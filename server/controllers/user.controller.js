const user = require("../modals/user,modal")

const register = async(req , res) =>{
    let {username , password , email } = req.body

    let users = await user.findOne({email : email})
    if(users){
        res.redirect("http://127.0.0.1:5500/client/login.html")
    }
    else{
        let data = await user.create(req.body)
        res.json(data)
    }
   
}

const login = async(req , res) =>{
    let {email , password} = req.body


    let users = await user.findOne({email : email})

   if(users){
    if(users.password == password){
        return res.json(users)
    }
    else{
        res.json("password is correct")
    }
   }
   else{
    res.redirect("/user/signup")
   }
}

module.exports = {register , login}