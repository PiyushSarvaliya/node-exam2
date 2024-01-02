const product = require("../modals/product.modal")
const Razorpay = require("razorpay")

const razorpay = new Razorpay({
    key_id: 'rzp_test_ZwsKvw5bh9rweM',
    key_secret: 'ElVpauo6VzGuQEv8znHcuwwG',
  });

const addproduct = async(req , res) =>{
    let {img , title , price , des} = req.body

    let data = await product.create(req.body)
    res.json(data)
}

const allproduct = async(req , res) =>{
    let data = await product.find()
    res.json(data)
}

const pay = (req, res) => {
    let {amount} =req.body
    let options ={
        amount : amount*100
    }
    razorpay.orders.create(options,(err , order) => {
        if(err){
            console.log(err)
            res.send({data : err.message})
        }
        else{
            res.send(order)
            
        }
    })
}
module.exports = {addproduct , allproduct , pay}