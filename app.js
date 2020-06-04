const express = require("express")
const bodyParser = require("body-parser")
const graphqlHttp = require("express-graphql")

const schema = require("./graphql/schema/index")
const resolver = require("./graphql/resolver/index")
const app = express();
const isAuth = require("./middleware/isAuth")

  const env = process.env.NODE_ENV ? process.env.NODE_ENV : "development";
  console.log(`------`, env);

  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV ? process.env.NODE_ENV : "development"}`
  });
  server_port = process.env.PORT;

  app.use(bodyParser.json());
  app.use(isAuth)

  app.use('/graphql',graphqlHttp({
      schema,
      rootValue:resolver,
      graphiql: true
  }))

  app.listen(server_port,()=>console.log(`======== Listening on Port ${server_port} ========`))

