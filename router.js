const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

//interseptor/middleware

const requireAuth = passport.authenticate('jwt', {session: false}) // no session coz we use cookie

module.exports = function(app) {
    //change the path  later - we dont want every1 on the app to be logged
    app.get('/', requireAuth, function(req, res){
        res.send({hi: 'there'})
    })
    app.post('/signup', Authentication.signup)



}