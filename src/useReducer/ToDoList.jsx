import { ToDoItem } from "./ToDoItem"

export const ToDoList = ({state = [], onDeleteToDo, onToggleToDo}) => {
  return (
    <>
         <ul className="list-group">
         {
                
                state.map(item => (
                    <ToDoItem key={item.id} item={item} onDeleteToDo={ onDeleteToDo } onToggleToDo={ onToggleToDo } />
                ))            
            }
          </ul>
    </>
  )
}
