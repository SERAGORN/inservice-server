const query = require('./query')
const mutation = require('./mutation')

const resolvers = {
  Query: query,
  Mutation: mutation,
  User: {
    services(root, args, context) {
      return context.prisma
        .user({
          id: root.id,
        }).services({
          orderBy: 'id_DESC',
        })
    },
    soldHistories(root, args, context) {
      return context.prisma
        .user({
          id: root.id,
        }).soldHistory()
    },
    boughHistories(root, args, context) {
      console.log(context.prisma
        .user({
          id: root.id,
        }))
      return context.prisma
        .user({
          id: root.id,
        }).boughHistory()
    }
  },
  Service: {
    user(root, args, context) {
      return context.prisma
        .service({id: root.id}).user()
    },
    category(root, args, context) {
      return context.prisma
        .service({
          id: root.id
        }).category()
    },
    tenders(root, args, context) {
      return context.prisma
        .service({id: root.id})
        .tenders()
    }
  },
  Category: {
    services(root, args, context) {
      return context.prisma.services({id: root.id}).category()
    }
  },
  SoldHistory: {
    user(root, args, context) {
      return context.prisma.soldHistory({id: root.id}).user()
    },
    service(root, args, context) {
      return context.prisma.soldHistory({id: root.id}).service()
    }
  },
  BoughHistory: {
    user(root, args, context) {
      return context.prisma.boughHistory({id: root.id}).user()
    },
    service(root, args, context) {
      return context.prisma.boughHistory({id: root.id}).service()
    }
  },
  Tender: {
    service(root, args, context) {
      return context.prisma.tender({id: root.id}).service()
    },
    user(root, args, context) {
      return context.prisma.tender({id: root.id}).user()
    }
  }

}


module.exports = resolvers