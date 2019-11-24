const query = {
        searchServices(root, args, context) {
          return context.prisma
            .services({ where: { title_contains: args.search }})
        },
        services(root, args, context) {
          if (args.lastServiceId == 0) {
            return context.prisma
              .services({
                orderBy: 'id_DESC',
                first: args.pagination
              })
          }
          return context.prisma
            .services({
              orderBy: 'id_DESC',
              after: args.lastServiceId,
              first: args.pagination
            })
        },
        user(root, args, context) {
          return context.prisma.user({name: args.name})
        },
        users(root, args, context) {
          return context.prisma.users()
        },
        service(root, args, context) {
          return context.prisma.service({ id: args.serviceId })
        },
        servicesByUser(root, args, context) {
          return context.prisma
            .user({
              id: args.userId,
            })
            .services()
        },
        categories(root, args, context) {
          return context.prisma.categories()
        },
        paginationUser(root, args, context) {
          return context.prisma
          .users({
            after: args.id 
          })
        }

}


module.exports = query