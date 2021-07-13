/**
 *
 * @param {*} parent result of the previous resolver call. To Note we aren't using this
 * @param {*} args the arguments of the resolvers field
 * @param {*} context a custom object each resolver can read from/write to
 * @param {*} info complicated lol
 * @returns our Mutations for the server :D
 */

async function newTodo(parent, args, context, info) {
  //* creates new todo object
  options = { high: "high", medium: "medium", low: "low" };
  //* array for converting priority arg to string

  const newTodo = context.prisma.todo.create({
    data: {
      description: args.description,
      date: new Date().getTime(),
      complete: false,
      priority: options[args.priority], //* converts enum given to a string as per Todo type params
    },
  });
  return newTodo;
}

async function completeTodo(parent, args, context, info) {
  //* sets given todo's complete to true

  const deletedTodo = context.prisma.todo.update({
    where: { id: args.id },
    data: { complete: true },
  });
  return deletedTodo;
}

async function editTodo(parent, args, context, info) {
  editedTodo = context.prisma.todo.update({
    where: { id: args.id },
    data: { description: args.description },
  });
  return editedTodo;
}

async function deleteTodo(parent, args, context, info) {
  //* deletes the Todo that matches given ID
  //! currently not in use

  deletedTodo = context.prisma.todo.delete({
    where: {
      id: args.id,
    },
  });

  return deletedTodo;
}

async function clearCompleted(parent, args, context, info) {
  //* deletes a todo's where complete === true

  return context.prisma.todo.deleteMany({
    where: { complete: true },
  });
}

module.exports = {
  newTodo,
  completeTodo,
  editTodo,
  deleteTodo,
  clearCompleted,
};
