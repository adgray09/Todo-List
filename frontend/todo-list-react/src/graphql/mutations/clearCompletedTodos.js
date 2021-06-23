import { gql } from '@apollo/client';

const clearCompletedTodos = gql`
    mutation clearCompleted {
        clearCompleted {
            description
        }
    }
`

export default clearCompletedTodos;