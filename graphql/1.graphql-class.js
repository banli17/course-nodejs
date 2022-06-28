const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require("graphql");

// 1 定义 schema
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      foo: {
        type: GraphQLString,
        resolve() {
          return "hello";
        },
      },
    },
  }),
});

graphql({
  schema,
  source: "{ foo }",
}).then((res) => {
  console.log("res", res);
});
