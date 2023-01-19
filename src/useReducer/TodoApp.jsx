import { useToDo } from "../hooks/useToDo";
import { ToDoAdd } from "./ToDoAdd";
import { ToDoList } from "./ToDoList";



export const TodoApp = () => {
  const { state, allToDosCount, pendingToDosCount, handleToDo, handleDeleteToDo, handleToggleToDo } = useToDo();
 
  return (
    <>
      <h1>TodoApp</h1>
      <small>All: ({allToDosCount}) Pending: ({pendingToDosCount })</small>
      <hr />
      <div className="row">
        <div className="col-7">
         <ToDoList state={state} onDeleteToDo={ handleDeleteToDo } onToggleToDo={ handleToggleToDo } />
        </div>
        <div className="col-5">
          <ToDoAdd onNewToDo={ handleToDo } />
        </div>
      </div>
    </>
  );
};
