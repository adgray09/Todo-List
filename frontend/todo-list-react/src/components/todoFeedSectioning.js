import React, { Fragment } from "react";
import TodoFeedListItem from "./todoFeedListItem";
import "../styles/allTodos.css";
import { Col, Container, ListGroup } from "react-bootstrap";

/**
 * * This component is used for High/Medium/Low data sectioning
 * @param data our array query variable
 * @param completeButtonFilter our state variable for if complete button is clicked
 */

function TodoFeedSectioning({ data, completeButtonFilter }) {
  //* Filtering data based on priority
  const highPrioData = data.filter((todo) => todo.priority === "high");
  const mediumPrioData = data.filter((todo) => todo.priority === "medium");
  const lowPrioData = data.filter((todo) => todo.priority === "low");

  return (
    <Fragment>
      <Container className="input-editing">
        <ListGroup.Item
          style={{ marginTop: "25px", backgroundColor: "black", color: "red" }}
        >
          <Col>High</Col>
        </ListGroup.Item>
      </Container>
      {highPrioData.map((item) => (
        <TodoFeedListItem
          item={item}
          completeButtonFilter={completeButtonFilter}
        />
      ))}
      <Container className="input-editing">
        <ListGroup.Item
          style={{ marginTop: "25px", backgroundColor: "black", color: "red" }}
        >
          <Col>Medium</Col>
        </ListGroup.Item>
      </Container>
      {mediumPrioData.map((item) => (
        <TodoFeedListItem
          item={item}
          completeButtonFilter={completeButtonFilter}
        />
      ))}
      <Container className="input-editing">
        <ListGroup.Item
          variant="secondary"
          style={{ marginTop: "25px", color: "red" }}
        >
          <Col>Low</Col>
        </ListGroup.Item>
      </Container>
      {lowPrioData.map((item) => (
        <TodoFeedListItem
          item={item}
          completeButtonFilter={completeButtonFilter}
        />
      ))}
    </Fragment>
  );
}

export default TodoFeedSectioning;
