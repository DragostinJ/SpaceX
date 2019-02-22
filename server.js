// starting point

const express = require("express");

const graphqlHTTP = require("express-graphql");
const schema = require("./schema");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const morgan = require("morgan");
const root = require("./rootValue");
const http = require("http");
const router = require("./router");


const connectWithRetry = () => {
  console.log("MongoDB connection with retry");
  let mongoUserCredentials = '';
  if (process.env.MONGO_USER && process.env.MONGO_PASSWORD) {
    mongoUserCredentials = `${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@`;
  }

  const MONGO_URL = process.env.MONGO_URL || 'https://young-garden-82503.herokuapp.com/';
  const DB_NAME = process.env.MONGO_DB_NAME || 'mongoPlay';
  const MONGO_CONNECTION_STRING = `mongodb://${mongoUserCredentials}${MONGO_URL}/${DB_NAME}`;

  mongoose
    .connect(MONGO_CONNECTION_STRING, { useNewUrlParser: true })
    .then(() => {
      console.log("MongoDB is connected");
    })
    .catch(err => {
      console.log("MongoDB connection unsuccessful, retry after 5 seconds.");
      setTimeout(connectWithRetry, 5000);
    });
};
connectWithRetry();
 
// const MONGO_URL = process.env.MONGO_URL || 'localhost:27017';
// const DB_NAME = process.env.MONGO_DB_NAME || 'sample-db';

// App Setup
const app = express();
// app.use(express.static(path.join(__dirname, 'client/build')));
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

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on ${PORT}`));

