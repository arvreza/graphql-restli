const {
    GraphQLSchema,
    GraphQLID,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString
} = require('graphql');

const axios = require('axios');

const BASE_URL = 'http://1.d2-proxy.ei-ltx1.atd.stg.linkedin.com:21360/d2/greetings/';

const greetingType = require('./type/greeting');

const GreetingSchema = new GraphQLObjectType({
    name: 'GreetingSchema',

    fields: {
        greeting: {
            type: greetingType,
            args: {
                id: { type: GraphQLID},
                key: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: (obj, args, ctc) => {
                return {
                    id: args.id,
                    description: axios
                        .get(`${BASE_URL}${args.key}`)
                        .then(response => response.data.greeting)
                };
            }
        }
    }
});

const ncSchema = new GraphQLSchema({
    query: GreetingSchema
});

module.exports = ncSchema;