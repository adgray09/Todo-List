// import React from 'react';
// import '../styles/allTodos.css'
// import { useMutation, useQuery } from '@apollo/client';
// import { useState, useEffect } from 'react'
// import listAllTodosQuery from '../graphql/queries/listAllTodos';
// import listCompleteTodosQuery from '../graphql/queries/listCompleteTodos';
// import completeTodoMutation from '../graphql/mutations/completeTodoItem';
// import clearCompletedTodos from '../graphql/mutations/clearCompletedTodos';
// import editTodoMutation from '../graphql/mutations/editTodo';

// function TodoFeed({ shouldRefresh }) {
//     // State variables
//     const [editButtonFilter, setEditButtonFilter] = useState(false);
//     const [completeButtonFilter, setCompleteButtonFilter] = useState(false);
//     const [theNewDescription, setTheNewDescription] = useState('');

//     // Queries
//     const { loading, error, data, refetch } = useQuery(listAllTodosQuery);
//     const { data: completedTodoData, error: error2, loading: loading2 } = useQuery(listCompleteTodosQuery);

//     // Mutations
//     const [editTodo] = useMutation(editTodoMutation);
//     const [clearTodos] = useMutation(clearCompletedTodos, { refetchQueries: [`completedTodos`] });
//     const [completeTodo] = useMutation(completeTodoMutation, { refetchQueries: [`allTodos`, `completedTodos`] });

//     useEffect(() => {
//         if (shouldRefresh === true) {
//             refetch()
//         }
//     }, [shouldRefresh])

//     async function onClickDelete(item) {
//         completeTodo({
//             variables: {
//                 id: item.id
//             }
//         });
//     }

//     async function onClickClear() {
//         clearTodos()
//     }

//     async function onClickEdit(bool, id, description) {

//         editTodo({
//             variables: {
//                 id: id,
//                 description: description
//             }
//         });
//         setEditButtonFilter(bool)
//     };

//     if (loading) return "Loading ...";
//     if (error) return <h1>`Error! ${error.message}`</h1>;

//     let dataSource = (completeButtonFilter === false) ? data.allTodos : completedTodoData.completedTodos
//     return <div className="container">
//         <button className="navigation-menu" onClick={() => { setCompleteButtonFilter(false) }}>All Todos</button>
//         <button className="main-content" onClick={() => { setCompleteButtonFilter(true) }}>Completed Todos</button>
//         <div className="app">
//             <div className="scroller">
//                 <ul className="no-bullets">

//                     {completeButtonFilter === true
//                         ? <button onClick={() => onClickClear()}>Clear</button>
//                         : null
//                     }
//                     {
//                         dataSource.map(item => <TodoFeedListItem item={item} onClickEdit={onClickEdit} theNewDescription={theNewDescription} editCurrentState={editButtonFilter}
//                             clearCurrentState={completeButtonFilter} onClickDelete={onClickDelete} />)
//                     }
//                 </ul >
//             </div>
//         </div>
//     </div >
// }

// // Sub Components
// function TodoFeedListItem({ item, onClickDelete, clearCurrentState, editCurrentState, onClickEdit, theNewDescription }) {
//     return <li key={item.id}>
//         <div className="container">
//             {!editCurrentState ? (
//                 <div className="header todo-description"> {item.description}
//                     <button onClick={() => onClickEdit(!editCurrentState)}>edit</button>
//                 </div>
//             ) : <NewDescription item={item} theNewDescription={theNewDescription} onClickEdit={onClickEdit} />
//             }
//             {clearCurrentState === false && editCurrentState === false
//                 ? <button className="header delete-button" onClick={() => { onClickDelete(item) }}>Delete</button>
//                 : null}
//         </div>
//     </li >
// }

// function NewDescription({ item, onClickEdit, NewDescription }) {
//     return (
//         <div className="header todo-description">
//             <form onSubmit={() => { NewDescription('void') }}>
//                 <textarea></textarea>
//                 <button type="submit">Resubmit</button>
//             </form>
//         </div>
//     )
// }

// export default TodoFeed;
