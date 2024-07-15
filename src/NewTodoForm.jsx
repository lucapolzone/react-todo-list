import { useState } from 'react'

export function NewTodoForm({ onSubmit }){

  const [newItem, setNewItem] = useState("")

  //con onSubmit-addTodo aggiunge il nuovo task all'invio del form
  function handleSubmit(e) { 
    //impedisce ricaricamento pagina.
    e.preventDefault();

    //se il campo è vuoto non aggiunge nulla
    if (newItem === "") return;

    //chiama la funzione onSubmit-addTodo e aggiunge il newItem
    onSubmit(newItem);
    
    //svuota il form
    setNewItem("");
  }


  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item">Aggiungi task</label>
        <input
          value={newItem}
          onChange={ e => setNewItem(e.target.value)} //e.target.value è js plain
          type="text" 
          id="item" 
        />
        <button>INVIA</button>
      </form>
    </div>
  )
};
