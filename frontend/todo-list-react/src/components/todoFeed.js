import React from "react";
import "../styles/allTodos.css";
import { useMutation, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import listAllTodosQuery from "../graphql/queries/listAllTodos";
import listCompleteTodosQuery from "../graphql/queries/listCompleteTodos";
import clearCompletedTodos from "../graphql/mutations/clearCompletedTodos";
import TodoFeedSectioning from "./todoFeedSectioning";


function TodoFeed({ shouldRefresh }) {
  // State variables
  const [completeButtonFilter, setCompleteButtonFilter] = useState(false);
  // Queries
  const { loading, error, data, refetch } = useQuery(listAllTodosQuery, {
  });
  const {
    data: completedTodoData,
    error: error2,
    loading: loading2,
    refetch: refetch2
  } = useQuery(listCompleteTodosQuery);

  // Mutations
  const [clearTodos] = useMutation(clearCompletedTodos);

  useEffect(() => {
    if (shouldRefresh === true) {
      refetch();
    }
  }, [shouldRefresh]);

  async function onClickClear() {
    clearTodos()
    refetch2()
  }

  if (loading) return "";
  if (error) return <h1>`Error! ${error.message}`</h1>;

  let dataSource = completeButtonFilter === false
    ? data.allTodos
    : completedTodoData.completedTodos;

  const sortedData = dataSource.slice().sort((a, b) => a.date - b.date)

  return (
    <div className="container">
      <button
        className="navigation-menu"
        onClick={() => {
          setCompleteButtonFilter(false);
        }}
      >
        All Todos
      </button>
      <button
        className="main-content"
        onClick={() => {
          setCompleteButtonFilter(true);
        }}
      >
        Completed Todos
      </button>
      <div className="app">
        <div className="scroller">
          <ul className="no-bullets">
            {completeButtonFilter === true ? (
              <button onClick={() => onClickClear()}>Clear</button>
            ) : null}
            {<TodoFeedSectioning 
              data={sortedData} 
              completeButtonFilter={completeButtonFilter}
            />}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoFeed;
