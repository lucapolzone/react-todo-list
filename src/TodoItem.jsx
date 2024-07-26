export function TodoItem({id, title, completed, toggleTodo, deleteTodo}){
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        <span>
          {title}
        </span>
      </label>
      <button onClick={() => deleteTodo(id)} className="delete-item">
        Delete
      </button>
    </li>
  )
};
