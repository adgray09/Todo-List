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
    e.preventDefault();
    addTodo({ variables: { description } });
    setDescription('')
  }

  return (
    <h1>
      <div>
        <h1 style={{ display: 'flex', justifyContent: 'center' }}>Todo List</h1>
        <div className="form-group">
          <form class="form-inline formDiv"
            onSubmit={onFormSubmit}
          >
            <textarea
              className='form-control textareastyles'
              id="exampleFormControlText"
              rows="5"
              value={description}
              onChange={e => {
                setDescription(e.target.value)
              }}
              type="text"
            />
            <button className="addButton" type="submit">Add</button>
          </form>
        </div>
      </div>
    </h1 >
  );
}

export default AddTodo;