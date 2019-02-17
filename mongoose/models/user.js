const mongose = require('mongoose')
const Schema = mongose.Schema

//define our model

const userSchema = new Schema({
    email: {type: String, unique: true, required: true, lowercase: true }, // ?
    password: String,
    age: Number
    // id: Int, // ??
    // firstName: String,
    // secondName: String,
    // location: 
    
    // cart: Cart,
    // rocket: Rocket,
    // payload: Payload,



})
//create model class
const ModelClass = mongose.model('user', userSchema)


//export the model
module.exports=ModelClass
