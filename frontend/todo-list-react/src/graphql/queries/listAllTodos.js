import { gql } from '@apollo/client';

const listAllTodosQuery = gql`
  query allTodos {
    allTodos {
      description
      complete
      id 
    }
  }
`

export default listAllTodosQuery;