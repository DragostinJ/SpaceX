const passport = require("passport");
const User = require("../mongoose/models/user");
const config = require("../config");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStorage = require("passport-local");

//create local strat
const localOptions = { usernameField: "email" };
const localLogin = new LocalStorage(localOptions, function(
  email,
  password,
  done
) {
  //verify that we have THat user
  User.findOne({ email: email }, function(err, user) {
    if (err) {
      return done(err);
    } //error handling

    if (!user) {
      return done(null, false);
    } // no user =   no error no user
    // compare passwords - is password = user.password
    user.comparePassword(password, function(err, isMatch) {
      if (err) return done(err);
      if (!isMatch) {
        return done(null, false);
      } // no error no user
      return done(null, user);
    });
  });
});

//setup options for jwt strategy
// tells jwt where took (header or ...) for the token
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: config.secret
};

//create jwt strategy

//payload = decoded jwt token, ({sub: user.id, iat: timestamp})
//done = callback

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  //See if the user ID in the payload exist in the database,
  User.findById(payload.sub, function(err, user) {
    if (err) {
      return done(err, false);
    }
    // If it does call DONE with THat user
    if (user) {
      done(null, user);
      //call done with no error and WITH user
    } else {
      done(null, false);
      // there is no error, but we did not find a user
    }
  });
});

//tell passport to use this jwt strategy
passport.use(jwtLogin);
passport.use(localLogin);
