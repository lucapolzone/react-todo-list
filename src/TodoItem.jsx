export function TodoItem({id, title, completed, toggleTodo}){
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
      <button className="delete-item">
        Delete
      </button>
    </li>
  )
};
