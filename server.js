const express = require("express")
const graphqlHTTP = require("express-graphql")
const schema = require('./schema')
const cors = require('cors')
// const bodyParser = require('body-parser')
const {buildSchema} = require('graphql')



const app = express();


 // Allow corss-origin
 app.use(cors())
//  app.use(bodyParser())
 
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
  rootValue: {
    events: () => {
      return ['Test1', 'Test2', 'Test3']
    },
    createEvent: (args) =>{
      const eventName = args.name;
      return eventName
    }
  }
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`) );