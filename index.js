const { prisma } = require('./generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')
const resolvers = require('./server/resolvers/')

const server = new GraphQLServer({
  typeDefs: './server/schemas/schema.graphql',
  resolvers: {...resolvers},
  context: {
    prisma,
  },
})
const options = {
  port: 3875,
  host: "http://192.168.0.106"
}

server.start(options ,(options) => console.log('Server is running on '+ options.host +':' + options.port))