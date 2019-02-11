const { printSchema } = require("graphql");






console.log(printSchema(graphqlSchemaObj));

const { buildSchema } = require('graphql');

const sdlSchema = `
  type Author {
    firstName: String
    lastName: String
  }
  type Query {
    author(id: Int!): Author
  }
`;

const graphqlSchemaObj = printSchema(sdlSchema);