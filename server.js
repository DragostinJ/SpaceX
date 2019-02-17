// starting point

const express = require("express");

const graphqlHTTP = require("express-graphql");
const schema = require("./schema");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const {buildSchema} = require('graphql')
const morgan = require("morgan");
const root = require("./rootValue");
const http = require("http");
const router = require("./router");


//DB setup
// setTimeout(function() {
  //   mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});
// }, 60000);

// mongoose.connect(("mongodb://127.0.0.1:27017/mongoPlay", { useNewUrlParser: true }, function(error) {
  //  console.log(error)
  // });

// mongoose.connect("mongodb://127.0.0.1:27017/mongoPlay", { useNewUrlParser: true })
// .then(
  //   () => {  console.log("MongoDB is connected"); },
//   err => { console.log("MongoDB connection unsuccessful, retry after 5 seconds.");
//   //       setTimeout(connectWithRetry, 5000);}
// )

//   mongoose.connect("mongodb://127.0.0.1:27017/mongoPlay", { useNewUrlParser: true })

// const db  = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error'))
// db.once('once', function() {
  //   console.log("MongoDB is connected");
// })

//App setup
const connectWithRetry = () => {
  console.log("MongoDB connection with retry");
  mongoose
    .connect("mongodb://127.0.0.1:27017/mongoPlay", { useNewUrlParser: true })
    .then(() => {
      console.log("MongoDB is connected");
    })
    .catch(err => {
      console.log("MongoDB connection unsuccessful, retry after 5 seconds.");
      setTimeout(connectWithRetry, 5000);
    });
};
connectWithRetry();


// App Setup

const app = express();
app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json()); // to fix the types when i upload img ...
router(app);
      app.use(
        "/graphql",
        graphqlHTTP({
          schema,
          graphiql: true,
          rootValue: root
        })
      );



//Server Setup
// const port = process.env.PORT || 3001
const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on ${PORT}`));

// require('./mongoose/config/db')

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/test');

// const Cat = mongoose.model('Cat', {name: String})
// let kitty = new Cat({name 'asdasd'})

// mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });
// const db = mongoose.connection;
// db.on('error', ()=> {console.log( '---FAILED to connect to mongoose')})
// db.once('open', () => {
//  console.log( '+++Connected to mongoose')
// })

// exports.test = function(req,res) {
//   res.render('test');
// };
