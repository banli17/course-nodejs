const express = require("express");
const { graphql, buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const schema = buildSchema(`
  type Article {
    id: ID!
    title: String!
    content: String
    tagList: [String!]!
  }

  # 查询入口点
  type Query {
    name: String
    age: Int
    articles: [Article]
    article(id: ID!): Article
  }

  # 定义参数对象
  input CreateArticleInput {
    title: String!
    content: String!
    tagList: [String!]
  }

  input UpdateArticleInput {
    title: String!
    content: String!
  }

  # 修改入口点, 注意下面参数要有名字才行
  type Mutation {
    createArticle(article: CreateArticleInput): Article
    updateArticle(id: ID!, article: UpdateArticleInput): Article
  }

`);

const articles = [
  {
    id: 1,
    title: "111",
    content: "11111",
  },
];
const rootValue = {
  name() {
    return "zhangsan";
  },
  age() {
    return 20;
  },
  articles() {
    return articles;
  },
  article(args) {
    return {
      id: args.id,
      title: "hi",
      content: "你好",
    };
  },
  createArticle({ article }) {
    console.log(article);
    const data = {
      id: uuidv4(),
      ...article,
    };
    articles.push(data);
    return data;
  },
};

const app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true, // 开启浏览器 Graphql IDE 调试工具
  })
);

app.listen(4000, () => {
  console.log(`graphql is running at http://localhost:4000/graphql`);
});
