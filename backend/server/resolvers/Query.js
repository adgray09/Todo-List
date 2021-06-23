async function allTodos(parent, args, context, info) {
    // return the whole array of Todo objects
    return context.prisma.todo.findMany({
        where: {
            complete: false
        }
    });
}

async function completedTodos(parent, args, context, info) {

    return context.prisma.todo.findMany({
        where: {
            complete: true
        }
    });
}

module.exports = {
    allTodos,
    completedTodos
}
