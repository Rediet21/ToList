import React from "react";
import {useState} from 'react';

function App2(){
  const [NewItem, SetNewItem] = useState("");
  const [Todos, SetTodo] = useState ([" "]);
  
  function handleClick (e) {
    e.preventDefault();
    SetTodo([...Todos, NewItem]);
    SetNewItem(" ");

  }
  return (
    <>
      <div>
        <h1>
          To Do List
        </h1>
        <input value = {NewItem} placeholder = 'New Item' onChange = {(e) => SetNewItem(e.target.value)}/>

      </div>
      <div>
        <button onClick={handleClick}>ADD</button>
      </div>
      <div>
        {Todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </div>
    </>
  );
}
export default App2;