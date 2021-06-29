import { gql } from '@apollo/client';

const newTodoMutation = gql`
  mutation newTodo($description: String!, $priority: Priority!) {
    newTodo(description: $description, priority: $priority) {
      description
      priority
    }
  }
`;

export default newTodoMutation;