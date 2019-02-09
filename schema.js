const axios = require("axios");

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList
} = require("graphql");

const LaunchType = new GraphQLObjectType({
  name: "Launch",
  fields: () => ({
    flight_number: { type: GraphQLInt },
    flight_year: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLInt },
    launch_date_local: { type: GraphQLString }, //date in int format
    rocket_type: { type: GraphQLString },
    lounch_success: { type: GraphQLBoolean },
    core_serial: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket: { type: RocketType }
    // start_date: {type: ? }
  })
});

//  RocketType
const RocketType = new GraphQLObjectType({
  name: "Rocket",
  fields: () => ({
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
    first_stage: { type: StageOne }
    // second_stage: {type: StageTwo}

    // "rocket_id": "falcon1",
    // "rocket_name": "Falcon 1",
    // "rocket_type": "Merlin A",
  })
});
const StageOne = new GraphQLObjectType({
  name: "StageOne",
  fields: () => ({
    cores: {
      type: CoresTypes
    }
  })
});

const CoresTypes = new GraphQLObjectType({
  name: "coresType",
  fields: {
    core_serial: { type: GraphQLString },
    reused: { type: GraphQLBoolean },
    land_succssess: { type: GraphQLInt },
    landing_intent: { type: GraphQLBoolean }
  }
});

// TODO SECOND STAGE
// const StageTwo = new GraphQLObjectType({
//     name: 'StageTwo',
//     fields: ()=> ({

//     })
// })

////////////////////// Root Query

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    lounches: {
      type: new GraphQLList(LaunchType),
      // TODO: THIS WITH ASYNC AWAIT !!!!!!!!!!!!!!
      resolve(parent, args) {
        return axios
          .get("https://api.spacexdata.com/v3/lounches")
          .then(res => res.data);
      }
    },

    lounch: {
      type: LaunchType,
      args: {
        flight_number: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
          .then(res => res.data);
      }
    },
    rockets: {
        type: new GraphQLList(RocketType),
        // TODO: THIS WITH ASYNC AWAIT !!!!!!!!!!!!!!
        resolve(parent, args) {
          return axios
            .get("https://api.spacexdata.com/v3/rockets")
            .then(res => res.data);
        }
      },
  
      rocket: {
        type: RocketType,
        args: {
          id: { type: GraphQLString }
        },
        resolve(parent, args) {
          return axios
            .get(`https://api.spacexdata.com/v3/rockets/${args.id}`)
            .then(res => res.data);
        }
      }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
  /// here I can put something else like mutations and ++
});
