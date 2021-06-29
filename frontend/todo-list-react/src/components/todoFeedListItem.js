import React, { Fragment } from "react";
import completeTodoMutation from "../graphql/mutations/completeTodoItem";
import editTodoMutation from "../graphql/mutations/editTodo";
import { useMutation } from "@apollo/client";
import { useState } from "react";

function TodoFeedListItem({
  item,
  completeButtonFilter
}) {
  const [editTodo] = useMutation(editTodoMutation);
  const [completeTodo] = useMutation(completeTodoMutation, {
    refetchQueries: [`allTodos`, `completedTodos`],
  });

  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState("");

  async function runEditTodoMutation(id, newDescription) {
    editTodo({
      variables: {
        id,
        description: newDescription,
      },
    });
  }

  async function runDeleteMutation(id) {
    completeTodo({
      variables: {
        id: item.id,
      },
    });
  }

  function onPressSave(e) {
    setIsEditing(!isEditing)
    runEditTodoMutation(item.id, description)
  }

  function onPressDelete() {
    runDeleteMutation(item.id)
  }

  return (
    <li className={!completeButtonFilter ? 'list-style-not-complete' : 'list-style-complete'} key={item.id}>
      <div className="container">
        <div className="header todo-description">
          <input
            className={!isEditing ? 'input-not-editing' : 'input-editing'}
            disabled={!isEditing}
            defaultValue={item.description}
            onChange={(e) => {
              setDescription(e.target.value)
            }}
          />
        </div>
        <Fragment>
          {completeButtonFilter !== true ? (
            isEditing ? (
              <button
                className="save-button header"
                onClick={onPressSave}
              >
                Save
              </button>
            ) : (
              <Fragment>
                <button
                  className="edit-button navigation-menu"
                  onClick={() => {
                    setIsEditing(!isEditing);
                  }}
                >
                  Edit
                </button>
                <button
                  disabled={isEditing}
                  className="delete-button main-content"
                  onClick={onPressDelete}
                >
                  Delete
                </button>
              </Fragment>
            )) : (
            null
          )}
        </Fragment>
      </div>
      <br>
      </br>
      <br>
      </br>
    </li>
  );
}

export default TodoFeedListItem;