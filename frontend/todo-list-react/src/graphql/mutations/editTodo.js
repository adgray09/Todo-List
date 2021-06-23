import { gql } from '@apollo/client';

const editTodoMutation = gql`
  mutation editTodo($id: ID!, $description: String!) {
    editTodo(id: $id, description: $description) {
        description
        id
    }
}
`

export default editTodoMutation;