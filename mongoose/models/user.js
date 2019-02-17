const mongose = require("mongoose");
const Schema = mongose.Schema;
const bcrypt = require("bcrypt-nodejs");

//define our model

const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true }, // ?
  password: String
  // age: Number
  // id: Int, // ??
  // firstName: String,
  // secondName: String,
  // location:

  // cart: Cart,
  // rocket: Rocket,
  // payload: Payload,
});

// on save hook, encrypt password

//Before saving a mode, run func below
userSchema.pre("save", function(next) {
  const user = this; //user.email user.password

  //gen a salt then run callback
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }

    //hashing the password using salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }

      //override password with encrypted password
      user.password = hash;

      //go ahead and save the model
      next();
    });
  });
});
//bcrypt takes the user password hash it  and compare it to the pass in DB 
userSchema.methods.comparePassword  = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err,isMatch){
    if (err) {return callback(err)}
    callback(null, isMatch)
  })  
}

//create model class
const ModelClass = mongose.model("user", userSchema);

//export the model
module.exports = ModelClass;
