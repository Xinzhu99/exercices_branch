import { useState } from "react";
import "./App.css";

function App() {
  const [listTodo, setListTodo] = useState([]);
  const [input, setInput] = useState("")
  // const handleOnchange = (e) => {
  //   setInput(e.target.value)
  // }
  //"e" dans la fonction représente l'obejt événement complet 
  const addItems = (e) => {
    e.preventDefault()
    if (input !== "") {
    setListTodo(prev => [...prev, input])
    setInput("")
    } 
  }
  // const deleteItem = () => {
  //   setListTodo(listTodo.filter((todo, index) => index !== id))
  // }
  return (
    <>
      <h1>Todo List</h1>
      <form>
        <input placeholder="Tapez votre tâche" value={input} onChange={e => setInput(e.target.value)}/>
        {/*je ne peux pas mettre onChange = {setInput(e.target.value)} car React a besoin de passer la fonction non pas l'appeler */}
        <button onClick={addItems}>Add</button>
        <p>{input}</p>
      </form>
      {/* ci-dessous la liste des tâches */}
      <ul>
        {listTodo.map((item, id) => (
          <li key={id}>
            <p>{item}</p>
            <button onClick={()=> setListTodo(listTodo.filter((todo, index)=> index !== id ))}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
