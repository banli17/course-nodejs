const express = require("express");
const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");

const PersonType = new GraphQLObjectType({
  name: "Person",
  fields: () => ({
    name: { type: GraphQLString },
    children: {
      type: new GraphQLList(PersonType),
    },
  }),
});

const ArticleType = new GraphQLObjectType({
  name: "Article",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    title: { type: GraphQLString },
  }),
});

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
      age: {
        type: GraphQLInt,
        resolve() {
          return 12;
        },
      },
      articles: {
        type: new GraphQLList(ArticleType),
        resolve() {
          const articles = [
            { id: 1, title: "111" },
            { id: 2, title: "222" },
          ];
          return articles;
        },
      },
      users: {
        type: PersonType,
        resolve() {
          return {
            name: "zs",
            children: [
              {
                name: "lisi",
              },
            ],
          };
        },
      },
    },
  }),
});

const app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true, // 开启浏览器 Graphql IDE 调试工具
  })
);

app.listen(4000, () => {
  console.log(`graphql is running at http://localhost:4000/graphql`);
});
