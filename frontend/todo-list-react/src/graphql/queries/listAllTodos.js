import { gql } from '@apollo/client';

const listAllTodosQuery = gql`
  query allTodos {
    allTodos {
      description
      complete
      id 
      date
      priority
    }
  }
`

export default listAllTodosQuery;