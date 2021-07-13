/**
 *
 * @param {*} parent result of the previous resolver call. To Note we aren't using this
 * @param {*} args the arguments of the resolvers field
 * @param {*} context a custom object each resolver can read from/write to
 * @param {*} info complicated lol
 * @returns our Queries for the server :D
 */

async function allTodos(parent, args, context, info) {
  //* return todo's with complete === false

  return context.prisma.todo.findMany({
    where: {
      complete: false,
    },
  });
}

async function completedTodos(parent, args, context, info) {
  //* return todo's with complete === true

  return context.prisma.todo.findMany({
    where: {
      complete: true,
    },
  });
}

module.exports = {
  allTodos,
  completedTodos,
};
