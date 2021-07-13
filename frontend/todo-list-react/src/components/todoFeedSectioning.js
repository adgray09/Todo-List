import React, { Fragment } from "react";
import TodoFeedListItem from "./todoFeedListItem";
import "../styles/allTodos.css";
import { Col } from "react-bootstrap";

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
      <h1
        style={{
          color: "red",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "25px",
        }}
        className="priority-headers"
      >
        High
      </h1>
      {highPrioData.map((item) => (
        <TodoFeedListItem
          item={item}
          completeButtonFilter={completeButtonFilter}
        />
      ))}
      <h1
        style={{
          color: "green",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "25px",
        }}
        className="priority-headers"
      >
        Medium
      </h1>
      {mediumPrioData.map((item) => (
        <TodoFeedListItem
          item={item}
          completeButtonFilter={completeButtonFilter}
        />
      ))}
      <h1
        style={{
          color: "yellow",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "25px",
        }}
        className="priority-headers"
      >
        Low
      </h1>
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
