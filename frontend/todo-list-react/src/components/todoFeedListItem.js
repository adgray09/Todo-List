import React, { Fragment } from "react";
import completeTodoMutation from "../graphql/mutations/completeTodoItem";
import editTodoMutation from "../graphql/mutations/editTodo";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ListGroup, Container, Col, Row } from "react-bootstrap";
import Glyphicon from "@strongdm/glyphicon";

function TodoFeedListItem({ item, completeButtonFilter }) {
  /**
   * @param item data of the given todo
   * @param completeButtonFilter state variable of our complete button
   * @returns JSX of the item and delete/edit buttons on each todo
   */

  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState("");

  //* Mutations for edit and complete
  const [editTodo] = useMutation(editTodoMutation);
  const [completeTodo] = useMutation(completeTodoMutation, {
    refetchQueries: [`allTodos`, `completedTodos`],
  });

  async function runEditTodoMutation(id, newDescription) {
    /**
     * * function for calling edit todo Mutation
     * @param id id of the item we are editing
     * @param newDescription our new description passed in for edit Mutation
     */
    editTodo({
      variables: {
        id,
        description: newDescription,
      },
    });
  }

  async function runDeleteMutation() {
    completeTodo({
      variables: {
        id: item.id,
      },
    });
  }

  function onPressSave() {
    setIsEditing(!isEditing); //* setting editing state variable to false on save click
    runEditTodoMutation(item.id, description);
  }

  function onPressDelete() {
    runDeleteMutation(item.id); //* delete item with id given id
  }

  return (
    <Container>
      <ListGroup.Item key={item.id}>
        <Row>
          <Col>
            <input
              className={!isEditing ? "input-not-editing" : "input-editing"}
              disabled={!isEditing}
              defaultValue={item.description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Col>
          <Fragment>
            {completeButtonFilter !== true ? (
              isEditing ? (
                <Col md="auto">
                  <button className="edit-image" onClick={onPressSave}>
                    <Glyphicon glyph="save" />
                  </button>
                </Col>
              ) : (
                <Fragment>
                  <Col xs lg="1">
                    <button
                      className="edit-image btn btn-default"
                      onClick={() => {
                        setIsEditing(!isEditing);
                      }}
                    >
                      <Glyphicon glyph="pencil" />
                    </button>
                  </Col>
                  <Col xs lg="1">
                    <button
                      disabled={isEditing}
                      className="edit-image"
                      onClick={onPressDelete}
                    >
                      <Glyphicon glyph="trash" />
                    </button>
                  </Col>
                </Fragment>
              )
            ) : null}
          </Fragment>
        </Row>
      </ListGroup.Item>
    </Container>
  );
}

export default TodoFeedListItem;
