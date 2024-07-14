import { useState } from 'react'
import './style.css'


export function NewTodoForm(){

  return (
    <div className='container'>
      <h1>To do List</h1>
      <form>
        <label htmlFor="text">Aggiungi task</label>
        <input type="text" id="task" />
        <button>INVIA</button>
      </form>
    </div>
  )
};
