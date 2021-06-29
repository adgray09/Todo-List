import React from 'react';
import '../styles/addTodoForm.css'
import { useMutation } from '@apollo/client';
import { useState, useEffect } from 'react'
import newTodoMutation from '../graphql/mutations/createNewTodo';

function AddTodo({ onSuccess, onError }) {
  let [description, setDescription] = useState('');
  const [addTodo, { loading, error, data }] = useMutation(newTodoMutation);

  useEffect(() => {
    if (data != null) {
      onSuccess({ description: data.description })
    }
  }, [data])

  function onFormSubmit(e) {
    var desc = document.forms["myForm"]["ftodo"].value; 
    const element = document.getElementById("prio-items")
    const priority = element.options[element.selectedIndex].text 
    console.log(priority)

    if (desc === "") {
      alert("Please enter todo");
      return false;
    } else {
      e.preventDefault();
      addTodo({ variables: { description, priority } });
      setDescription('')
    }
  }

  return (
    <h1>
      <div>
        <h1 style={{ display: 'flex', justifyContent: 'center' }}>Todo List</h1>
          <form name="myForm"
            onSubmit={onFormSubmit}
          ><div className="form-container">
            <textarea
              name="ftodo"
              placeholder="Add Todo's"
              className='textareastyles navigation-menu-form'
              id="exampleFormControlText"
              rows="5"
              value={description}
              onChange={e => {
                setDescription(e.target.value)
              }}
              type="text"
              />
              <select className="main-content-form" name="prio-items" id="prio-items">
                <option value="high">high</option>
                <option value="medium">medium</option>
                <option value="low">low</option>
              </select>
            </div>
            
            <button className="addButton" type="submit">Add</button>
          </form>
        </div>
    </h1>
  );
}

export default AddTodo;