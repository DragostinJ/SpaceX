const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

//interseptor/middleware

const requireAuth = passport.authenticate('jwt', {session: false}) // no session, we use cookie
const requireSignin = passport.authenticate('local', {session: false})

module.exports = function(app) {
    //change the path  later - we dont want every1 on the app to be logged

    //adding new routes - route + requireAuth + end
    app.get('/', requireAuth, function(req, res){
        res.send({hi: 'there'})
    })
    //auth the user before route they hit route handler
    app.post('/signin', requireSignin, Authentication.signin)
    app.post('/signup', Authentication.signup) 




}