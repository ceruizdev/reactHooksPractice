import { useForm } from "../hooks/useForm";

export const ToDoAdd = ({onNewToDo}) => {
    // const [message, setMessage] = useState('');
    const onFormSubmit = (event) => {
        event.preventDefault();
        if(description.length <= 1) return;
        const newToDo = {
            id: new Date().getTime(),
            done: false,
            description: description
        };
        onNewToDo(newToDo);
        onCleanForm();
    };

    const { description, onInputChange, onCleanForm } = useForm({
        description: ''
    });
    return (
    <>
        <h4>Add ToDo</h4>
          <hr />
          <form onSubmit={onFormSubmit}>
            <input 
            type="text"
            name="description" 
            placeholder="" 
            className="form-control" 
            value={description} 
            onChange={onInputChange}/>
            <button type="submit" className="btn btn-outline-primary mt-2">
              Add ToDo
            </button>
          </form>
    </>
  )
}
