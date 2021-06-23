import { gql } from '@apollo/client';

const completeTodoMutation = gql`
  mutation completeTodo($id: ID!) {
    completeTodo(id: $id) {
      id
      complete
    }
}
`

export default completeTodoMutation