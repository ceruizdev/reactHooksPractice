export const ToDoItem = ({item, onDeleteToDo, onToggleToDo}) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span  role="button" className={`align-self-center ${ (item.done) ? 'text-decoration-line-through' : ''}`} onClick={() => onToggleToDo(item.id) }>
            {item.description} 
        </span>
        <button className="btn btn-danger" onClick={() => onDeleteToDo(item.id)}>Delete</button>
      </li>
    </>
  );
};
