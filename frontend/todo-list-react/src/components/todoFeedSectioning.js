import React, { Fragment } from "react";
import TodoFeedListItem from './todoFeedListItem';
import "../styles/allTodos.css";

function TodoFeedSectioning({
    data,
    completeButtonFilter
}) {
    const highPrioData = data.filter(todo => todo.priority === "high");
    const mediumPrioData = data.filter(todo => todo.priority === "medium");
    const lowPrioData = data.filter(todo => todo.priority === "low");

    return (
        <Fragment>
            <h1 style={{color: "red"}} className="priority-headers">High</h1>
            {highPrioData.map((item) => (
                <TodoFeedListItem
                    item={item}
                    completeButtonFilter={completeButtonFilter}
                />
            ))}
            <h1 style={{color: "green"}} className="priority-headers">Medium</h1>
            {mediumPrioData.map((item) => (
                <TodoFeedListItem  
                    item={item}
                    completeButtonFilter={completeButtonFilter}
                />
    ))}
            <h1 style={{color: "yellow"}} className="priority-headers">Low</h1>
            {lowPrioData.map((item) => (
                <TodoFeedListItem  
                    item={item}
                    completeButtonFilter={completeButtonFilter}
                />
    ))}
        </Fragment>
    )
}

export default TodoFeedSectioning;