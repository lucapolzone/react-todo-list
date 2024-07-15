import { TodoItem } from "./TodoItem"

export function TodoList({ todos }){
  return (
    <div className="container">
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {/* col map ottengo l'oggetto todo */}
        {todos.map(todo => {
          return (
            <TodoItem 
            // spreddo todo e ottengo id, title, completed
            {...todo}
            //key prop
            key = {todo.id}
            />
          )
        })}
      </ul>
    </div>
  )
};
