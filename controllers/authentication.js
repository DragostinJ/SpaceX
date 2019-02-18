const jwt = require("jwt-simple");
const User = require("../mongoose/models/user");
const config = require("../config");

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

//Sign in
exports.signin = function(req, res, next) {
  //user had been auth with email pass
  // we just need to give them a token
  // req.user
  // comes from the "done" callback from LocalStrategy-localLogin in passport
  
  res.send({ token: tokenForUser(req.user) })
  //sends respond with token that is tokenForUser function that takes curr user
};

exports.signup = function(req, res, next) {
  console.log(req.body)
  const email = req.body.email;
  const password = req.body.password;

  // TODO: more validation on the email !
  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "you must provide email and password" });
  }
  // See if a user with the given email exist
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) {
      return next(err);
    }
    // If a user with email does not exist, return an erro

    if (existingUser) {
      return res.status(422).send({ error: "Email is in use" });
    }
  });

  //If a record doesn not exist, create and save user record
  const user = new User({
    email: email,
    password: password
  });
  user.save(function(err) {
    if (err) return next(err);
    // Respond to request indicating the user was created
    res.json({ token: tokenForUser(user) });
  });
};
