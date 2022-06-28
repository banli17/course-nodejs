const { graphql, buildSchema } = require("graphql");

// 1 定义 schema
const schema = buildSchema(`
    type Query {
        foo: String
        age: Int
    }
`);

// 2 定义 resolver
const rootValue = {
  foo() {
    return "foo";
  },
  age() {
    return 12;
  },
};

graphql({ schema, source: "{ foo }", rootValue })
  .then((res) => {
    console.log("res", res);
  })
  .catch((e) => {
    console.log(e);
  });
