const mutation = {
    acceptTender(root, args, context) {
      return context.prisma.updateTender({
        where: {
          id: args.tenderId
        },
        data: {accept: true, price: args.price}
      })
    },
    createTender(root, args, context) {
      return context.prisma.createTender({
        price: args.price,
        comment: args.comment,
        service: {
          connect: { id: args.serviceId },
        },
        user: {
          connect: { id: args.buyerId },
        }
      })
    },
    doneService(root, args, context) {
      return context.prisma.updateService({
        where: { id: args.serviceId },
        data: { done: true },
      })
    },
    createService(root, args, context) {
      return context.prisma.createService({
        title: args.title,
        description: args.description,
        address: args.address,
        price: args.price,
        created: args.created,
        timeToDo: args.timeToDo,
        price: args.price,
        user: {
          connect: { id: args.userId },
        },
        category: {
          connect: { id: args.categoryId },
        }
      })
    },
    createCategory(roor, args, context) {
      return context.prisma.createCategory({
        title: args.title,
      })
    },
    createUser(root, args, context) {
      return context.prisma.createUser({ name: args.name, phone: args.phone })
    },
    updateService(root, args, context) {
      return context.prisma.updateService({ 
        where: {
          id: args.id
        },
        data: {
          title: args.title
        }
      })
    },
    updateCategory(root, args, context) {
      return context.prisma.updateCategory({ 
        where: {
          id: args.id
        },
        data: {
          title: args.title
        }
      })
    },
    updateUser(root, args, context) {
      return context.prisma.updateUser({
        where: {
          id: args.id
        },
        data: {
          name: args.name
        }
      })
    },
    buyService(root, args, context) {
      return context.prisma.createBoughHistory({
        service: {
          connect: { id: args.serviceId },
        },
        user: {
          connect: { id: args.buyerId },
        }
      }).then(() => context.prisma.createSoldHistory({
          service: {
            connect: { id: args.serviceId },
          },
          user: {
            connect: { id: args.sellerId },
          }
        })
      )
    },
  }
module.exports = mutation
