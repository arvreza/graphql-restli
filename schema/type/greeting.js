const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLNonNull
  } = require('graphql');
  
  module.exports = new GraphQLObjectType({
    name: 'greetingType',
  
    fields: {
      id: { type: GraphQLID },
      description: { type: GraphQLString }
    }
  });
  