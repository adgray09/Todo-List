import React from "react";
import "../styles/addTodoForm.css";
import { useMutation } from "@apollo/client";
import { useState, useEffect } from "react";
import newTodoMutation from "../graphql/mutations/createNewTodo";
import {
  Form,
  InputGroup,
  Dropdown,
  DropdownButton,
  FormControl,
  FormGroup,
  Button,
} from "react-bootstrap";

function AddTodo({ onSuccess, onError }) {
  /**
   * @param onSuccess handles refetching allTodo query
   * @returns JSX of add todo form and dropdown of priority
   */

  let [priority, setPriority] = useState("high");
  let [description, setDescription] = useState("");
  const [addTodo, { loading, error, data }] = useMutation(newTodoMutation);

  useEffect(() => {
    if (data != null) {
      onSuccess({ description: data.description });
    }
  }, [data]);

  const handleSelect = (e) => {
    setPriority(e);
  };

  function onFormSubmit(e) {
    var desc = document.forms["myForm"]["ftodo"].value; // grabs value from myForm
    //* not allowing empty submission
    if (desc === "") {
      alert("Please enter todo");
      return false;
    } else {
      e.preventDefault();
      addTodo({ variables: { description, priority } }); // call addTodo Mutation will value
      setDescription(""); // reset state variable to empty string
      setPriority("");
    }
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }} class="display-1">
        Todo List
      </h1>
      <Form className="col-lg-6 offset-lg-3" name="myForm">
        <FormGroup>
          <InputGroup>
            <FormControl
              name="ftodo"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              placeholder="Enter Todo"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <DropdownButton
              as={InputGroup.Append}
              variant="outline-primary"
              title="Priority"
              id="input-group-dropdown-2"
              onSelect={handleSelect}
              value={priority}
            >
              <Dropdown.Item selected="selected" eventKey="high" href="#">
                High
              </Dropdown.Item>
              <Dropdown.Item eventKey="medium" href="#">
                medium
              </Dropdown.Item>
              <Dropdown.Item eventKey="low" href="#">
                low
              </Dropdown.Item>
            </DropdownButton>
            <Button onClick={onFormSubmit} variant="primary" type="submit">
              Submit
            </Button>
          </InputGroup>
        </FormGroup>
      </Form>
    </div>
  );
}

export default AddTodo;
