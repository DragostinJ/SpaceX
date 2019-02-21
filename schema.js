const axios = require("axios");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLFloat,
  GraphQLNonNull
} = require("graphql");

const PayloadType = new GraphQLObjectType({
  name: "Payloads",
  fields: () => ({
    payload_id: { type: GraphQLString },
    reused: { type: GraphQLBoolean },
    customers: { type: GraphQLList(GraphQLString) },
    nationality: { type: GraphQLString },
    manufacturer: { type: GraphQLString },
    payload_type: { type: GraphQLString },
    payload_mass_kg: { type: GraphQLFloat },
    payload_mass_lbs: { type: GraphQLFloat },
    orbit_params: { type: OrbitParams }
  })
});
const OrbitParams = new GraphQLObjectType({
  name: "OrbitParams",
  fields: () => ({
    refere4nce_system: { type: GraphQLString },
    regime: { type: GraphQLString },
    longitude: { type: GraphQLFloat },
    somi_major_axis_km: { type: GraphQLFloat },
    periapsis_km: { type: GraphQLFloat },
    apoapsis_km: { type: GraphQLFloat }
  })
});
const MissionsType = new GraphQLObjectType({
  name: "Missions",
  fields: () => ({
    mission_name: { type: GraphQLString },
    mission_id: { type: GraphQLInt },
    manufactures: { type: GraphQLString },
    wikipedia: { type: GraphQLString },
    website: { type: GraphQLString },
    twitter: { type: GraphQLString },
    description: { type: GraphQLString },
    payload_ids: { type: [GraphQLString] }
  })
});
const MissionType = new GraphQLObjectType({
  name: "Mission",
  fields: () => ({
    mission_name: { type: GraphQLString },
    mission_id: { type: GraphQLString },
    wikipedia: { type: GraphQLString },
    website: { type: GraphQLString },
    twitter: { type: GraphQLString },
    description: { type: GraphQLString },
    payload_ids: { type: GraphQLList(GraphQLString) }
  })
});

const LaunchType = new GraphQLObjectType({
  name: "Launch",
  fields: () => ({
    flight_number: { type: GraphQLInt },
    flight_year: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLInt },
    launch_date_local: { type: GraphQLString }, //date in int format
    rocket_type: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    core_serial: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket: { type: RocketType }

  })
});
// PAYLOAD TYPE

//POST TYPE
const PostsType = new GraphQLObjectType({
  name: "Posts",
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    author: { type: GraphQLString }
  })
});

const PostType = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    author: { type: GraphQLString }
  })
});
//  RocketType
const RocketType = new GraphQLObjectType({
  name: "Rocket",
  fields: () => ({
    rocket_id: { type: GraphQLString },
    active: { type: GraphQLBoolean },
    boosters: { type: GraphQLInt },
    cost_per_launch: { type: GraphQLString },
    success_rate_pct: { type: GraphQLInt },
    first_flight: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
    first_stage: { type: StageOne },
    stages: { type: GraphQLInt },
    country: { type: GraphQLString },
    company: { type: GraphQLString },
    engines: { type: EngineType },
    height: { type: HeightType }
  })
});
const HeightType = new GraphQLObjectType({
  name: "HeightType",
  fields: () => ({
    meters: { type: GraphQLFloat },
    feet: { type: GraphQLFloat }
  })
});
const EngineType = new GraphQLObjectType({
  name: "Engine",
  fields: () => ({
    type: { type: GraphQLString },
    version: { type: GraphQLString },
    layout: { type: GraphQLString },
    engine_loss_maxmber: { type: GraphQLInt },
    propellant_1: { type: GraphQLString },
    propellant_2: { type: GraphQLString }
  })
});

const StageOne = new GraphQLObjectType({
  name: "StageOne",
  fields: () => ({
    reusable: { type: GraphQLBoolean },
    engines: { type: GraphQLInt },
    burn_time_sec: { type: GraphQLInt }
  })
});


//// MUTATIONS

// const MutationQuery = new GraphQLObjectType({
//   name: "RootMutation",
//   fields: {
//     createEvent: {
//         name: "name",
//         type: GraphQLString,
//         args: { name: { type: new GraphQLNonNull(GraphQLString) } }
//       }
//   }
// });

////////////////////// Root Query

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    mission: {
      type: MissionType,
      args: {
        mission_id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v3/missions/${args.mission_id}`)
          .then(res => res.data);
      }
    },
    launch: {
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
    payload: {
      type: PayloadType,
      args: {
        payload_id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v3/payloads/${args.payload_id}`)
          .then(res => res.data);
      }
    },
    payloads: {
      type: new GraphQLList(PayloadType),
      // TODO: THIS WITH ASYNC AWAIT !!!!!!!!!!!!!!
      resolve(parent, args) {
        return axios
          .get("https://api.spacexdata.com/v3/payloads")
          .then(res => res.data);
      }
    },
    missions: {
      type: new GraphQLList(MissionType),
      // TODO: THIS WITH ASYNC AWAIT !!!!!!!!!!!!!!
      resolve(parent, args) {
        return axios
          .get("https://api.spacexdata.com/v3/missions")
          .then(res => res.data);
      }
    },
    launches: {
      type: new GraphQLList(LaunchType),
      // TODO: THIS WITH ASYNC AWAIT !!!!!!!!!!!!!!
      resolve(parent, args) {
        return axios
          .get("https://api.spacexdata.com/v3/launches")
          .then(res => res.data);
      }
    },

    launch: {
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
  // mutation: MutationQuery
  // mutation: RootMutation
  /// here I can put something else like mutations and ++
});
