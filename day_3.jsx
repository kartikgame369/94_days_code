import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

import { useState, useEffect } from 'react';
import axios from 'axios';

function App(){
  const [counter , setcounter] = useState(0);
  const [inputvalue, setinputvalue] = usestate(1);
  let count =0 ;
  for(let i =1; i<=inputvalue; i++){
    count = count +i;
  }
  return(
    <div>
      <input onChange={function(e){
        setinputvalue(e.target.value);
      }} placeholder='find sum from 1 to n ' />
      <br />
      <button onClick={()=>{
        setcounter(counter+1);
      }}>counter {{counter}}</button>

    </div>
  )
}
// function count(n){
//   for(let i ; i<=n; i++){
//     n=i+1
//   }
// }

// function App() {
  // const [selectid, setselectid] = useState(1);

  // return (
    // <div>
    //   <button onClick={function () {
    //     setselectid(1);
    //   }}></button>
    //   <button onClick={function () {
    //     setselectid(2);
    //   }}></button>
    //   <button onClick={function () {
    //     setselectid(3);
    //   }}></button>
    //   <button onClick={function () {
    //     setselectid(4);
    //   }}></button>
    //   <Todo id={selectid} />
    // </div>
  // );
// }

// function Todo({ id }) {
  // const [todo, setTodos] = useState({});

  // useEffect(() => {
  //   axios.get("http://localhost:3003")
  //     .then(function (response) {
  //       setTodos(response.data.todo);
  //     });
  // }, []);
// }

  // return (
    // <div>
    //   {todo.title}
    // </div>
  // );


// export default App;


 
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:2003")
//       .then(function (response) {
//         setTodos(response.data.todos);
//       })
//       .catch((error) => {
//         console.error("Error fetching todos:", error);
//       });
//   }, []);

//   return (
//     <>
//       {todos.map((todo, index) => (
//         <Todo 
//           key={index}
//           title={todo.title}
//           description={todo.description}
//         />
//       ))}
//     </>
//   );
// }

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>



export default App;
