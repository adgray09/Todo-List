import { gql } from '@apollo/client';

const newTodoMutation = gql`
  mutation newTodo($description: String!) {
    newTodo(description: $description) {
      description
    }
  }
`;

export default newTodoMutation;