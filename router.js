const Authentication = require('./controllers/authentication');

module.exports = function(app) {
    app.post('/signup', Authentication.signup)



    // request response next(midd ?)
    // app.get('/', function(req, res, next) {
    //     res.send('it works')
    // })   
}