var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");
const path = require("path");
const fs = require("fs");
var cors = require("cors");

const schemaPath = path.resolve(__dirname, "./schema.graphql");
const schema_def = fs.readFileSync(schemaPath, "utf8");
var schema = buildSchema(schema_def);
var fakeDatabase = {};

class Message {
  constructor(id, { content, author }) {
    this.id = id;
    this.content = content;
    this.author = author;
  }
}

class Owner {
  constructor(id, { owner }) {
    this.id = id;
    this.owner = owner;
  }
}

fakeDatabase["idfixo"] = {
  owner: {
    id: "idfixo",
    name: "user",
    dog: {
      id: require("crypto").randomBytes(10).toString("hex"),
      name: "dog name",
      toy: {
        id: require("crypto").randomBytes(10).toString("hex"),
        type: "toy-type",
      },
    },
  },
};

var root = {
  hello: () => "Hello world!",
  getMessage: ({ id }) => {
    if (!fakeDatabase[id]) {
      throw new Error("no message exists with id " + id);
    }
    return new Message(id, fakeDatabase[id]);
  },
  createMessage: ({ input }) => {
    var id = require("crypto").randomBytes(10).toString("hex");

    fakeDatabase[id] = input;
    return new Message(id, input);
  },
  adoptDog: () => {
    var id = require("crypto").randomBytes(10).toString("hex");

    fakeDatabase[id] = {
      owner: {
        id,
        name: "user",
        dog: {
          id: require("crypto").randomBytes(10).toString("hex"),
          name: "dog name",
          toy: {
            id: require("crypto").randomBytes(10).toString("hex"),
            type: "toy-type",
          },
        },
      },
    };
    console.log(fakeDatabase);
    return new Owner(id, fakeDatabase[id]);
  },
  getDogOwner: ({ id }) => {
    if (!fakeDatabase[id]) {
      throw new Error("no owner exists with id " + id);
    }

    return new Owner(id, fakeDatabase[id]);
  },
  updateMessage: ({ id, input }) => {
    if (!fakeDatabase[id]) {
      throw new Error("no message exists with id " + id);
    }
    fakeDatabase[id] = input;
    return new Message(id, input);
  },
};

var app = express();
app.use(cors());
app.use(
  "/api",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000, () => console.log("Now browse to localhost:4000/api"));
