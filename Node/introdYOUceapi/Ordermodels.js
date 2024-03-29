const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    name:{
        type:String
    },
    amount:{
        type:Number
        
    },
    order_id:{
        type:String
    },
    razorpay_payment_id:{
         type:String,
         default:null
    },
    razorpay_order_id:{
        type:String,
        default:null
    },
    razorpay_signature:{
        type:String,
        default:null
    },
    
    
},
{ 
    timeStamps:true
}
) 

const OrderModel = mongoose.model("order",Schema);
module.exports ={ OrderModel};
