import { useEffect, useReducer } from "react";
import { todoReducer } from "../useReducer/todo-reducer";

export const useToDo = () => {
  const initialState = [];
  const init = () => {
    return JSON.parse(localStorage.getItem("toDos")) || [];
  };
  const [state, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(state));
  }, [state]);

  

  const handleToDo = (toDo) => {
    const action = {
      type: "[ToDo] Add new",
      payload: toDo,
    };
    dispatch(action);
  };

  const handleDeleteToDo = (id) => {
    const action = {
      type: "[ToDo] Remove",
      payload: id,
    };
    dispatch(action);
  };

  const handleToggleToDo = (id) => {
    const action = {
      type: "[ToDo] Mark as ready or not",
      payload: id,
    };
    dispatch(action);
  };

  return {
    state,
    allToDosCount: state.length, 
    pendingToDosCount: state.filter(todo => !todo.done).length,
    handleToDo,
    handleDeleteToDo,
    handleToggleToDo,
  };
};
