async function newTodo(parent, args, context, info) {

    options = {high: "high", medium: "medium", low: "low"}

    const newTodo = context.prisma.todo.create({
        data: {
            description: args.description,
            date: new Date().getTime(),
            complete: false,
            priority: options[args.priority]
        },
    })
    return newTodo
}

async function completeTodo(parent, args, context, info) {

    const deletedTodo = context.prisma.todo.update({
        where: { id: args.id },
        data: { complete: true }
    });
    return deletedTodo
}

async function editTodo(parent, args, context, info) {
    editedTodo = context.prisma.todo.update({
        where: { id: args.id },
        data: { description: args.description }
    })
    return editedTodo
}

async function deleteTodo(parent, args, context, info) {

    deletedTodo = context.prisma.todo.delete({
        where: {
            id: args.id
        }
    })

    return deletedTodo
}

async function clearCompleted(parent, args, context, info) {

    return context.prisma.todo.deleteMany({
        where: { complete: true }
    })
}

module.exports = {
    newTodo,
    completeTodo,
    editTodo,
    deleteTodo,
    clearCompleted
}