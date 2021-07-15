import React from "react";
import "../styles/allTodos.css";
import { useMutation, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import listAllTodosQuery from "../graphql/queries/listAllTodos";
import listCompleteTodosQuery from "../graphql/queries/listCompleteTodos";
import clearCompletedTodos from "../graphql/mutations/clearCompletedTodos";
import TodoFeedSectioning from "./todoFeedSectioning";
import { Col, Row, ListGroup, Container, Button } from "react-bootstrap";

function TodoFeed({ shouldRefresh }) {
  /**
   * @param {*} shouldRefresh state variable passed in to refetch allTodos query
   * @returns JSX containing allTodos/completed todo's buttons as well as priority Sectioning component
   */

  const [completeButtonFilter, setCompleteButtonFilter] = useState(false);
  const { loading, error, data, refetch } = useQuery(listAllTodosQuery, {});
  const {
    data: completedTodoData,
    error: error2,
    loading: loading2,
    refetch: refetch2,
  } = useQuery(listCompleteTodosQuery);

  const [clearTodos] = useMutation(clearCompletedTodos);

  //* refreshes page by calling refetch
  useEffect(() => {
    if (shouldRefresh === true) {
      refetch();
    }
  }, [shouldRefresh]);

  async function onClickClear() {
    clearTodos();
    refetch2();
  }

  //* insures page won't be empty and error won't be thrown
  if (loading) return "";
  if (error) return <h1>`Error! ${error.message}`</h1>;

  //* filtered data based on state variable
  let dataSource =
    completeButtonFilter === false
      ? data.allTodos
      : completedTodoData.completedTodos;

  //* sorting data by date so when edit mutation is applied it won't change the order of data
  const sortedData = dataSource.slice().sort((a, b) => a.date - b.date);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Button
              variant="secondary"
              className="float-right"
              onClick={() => {
                setCompleteButtonFilter(false);
              }}
            >
              All Todos
            </Button>
          </Col>
          <Col>
            <Button
              variant="secondary"
              className="float-left"
              onClick={() => {
                setCompleteButtonFilter(true);
              }}
            >
              Completed Todos
            </Button>
          </Col>
        </Row>
      </Container>
      <div className="app">
        <div className="scroller">
          <ListGroup>
            {completeButtonFilter === true ? (
              <button onClick={() => onClickClear()}>Clear</button>
            ) : null}
            {
              <TodoFeedSectioning
                data={sortedData}
                completeButtonFilter={completeButtonFilter}
              />
            }
          </ListGroup>
        </div>
      </div>
    </div>
  );
}

export default TodoFeed;
