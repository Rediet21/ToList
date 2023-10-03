import React from "react";
import { useState } from "react";
const App = () => {
  const [newvalue, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault();

    console.log(newvalue)

  }
  return (
    <form>
      <input value = {newvalue}  placeholder="New Task" onChange={(e) => setValue(e.target.value)}/>
      <button type = 'submit'>ADD</button>
    </form>
  )
} 
export default App();