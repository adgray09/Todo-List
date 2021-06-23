import { gql } from '@apollo/client';

const listCompleteTodosQuery = gql`
  query completedTodos {
    completedTodos {
      description
      complete
      id 
    }
  }
`

export default listCompleteTodosQuery;