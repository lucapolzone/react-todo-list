export function TodoItem({id, title, completed}){
  return (
    <li>
      <label>
        <input
          type="checkbox"
        />
        {title}
      </label>
      <button className="delete-item">
        Delete
      </button>
    </li>
  )
};
