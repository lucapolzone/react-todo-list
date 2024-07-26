import { useEffect, useState } from 'react'
import { NewTodoForm } from './NewTodoForm'
import { TodoList } from './TodoList'

import './style.css'

export default function App(){

  const [todos, setTodos] = useState(() => { 
    //prende i valori di items dal localStorage
    const localValue = localStorage.getItem("ITEMS") 
    
    //se non ci sono dati ritorna un array vuoto
    if (localValue == null) return []
    
    //converto variabile localValue da JSON a oggetto javascript
    return JSON.parse(localValue)
  })

  useEffect(() => {
    //Questa riga entra in gioco quando cambia todos
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  const emptyLocalStorage = () => {
    // console.log(localStorage);
    localStorage.clear();
    // console.log(localStorage);
  };


  //### Sezione funzioni
  //aggiungo to-do
  function addTodo(title) {
    setTodos(currentTodos => { //currentTodos è lo stato corrente dell'array todos
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },  //crypto.randomUUID() gli da un identificatore univoco
      ]
    })
  }

    //toggle to-do
    function toggleTodo(id, completed) {
      setTodos(currentTodos => {
        return currentTodos.map(todo => {
          if (todo.id === id) {
            //se l'id corrisponde ritorna l'oggetto todo con completed aggiornato 
            return { ...todo, completed }
          }
          
          // altrimenti ritorna todo come prima
          return todo
        })
      })
    }

    //cancella to-do
    function deleteTodo(id) {
      setTodos(currentTodos => {
        return currentTodos.filter(todo => todo.id !== id)
      })
    }


  return (
    <> 
      <h1>To do List</h1>
      <button onClick={emptyLocalStorage}>SVUOTA Local storage</button>
      <NewTodoForm onSubmit={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
};
