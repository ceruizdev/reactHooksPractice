export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[ToDo] Add new":
      return [...initialState, action.payload];
    case "[ToDo] Remove":
      return initialState.filter((todo) => todo.id != action.payload);
    case "[ToDo] Mark as ready or not":
      return initialState.map((todo) => {
        if(todo.id === action.payload){
            return {
                ...todo,
                done: !todo.done
            }
        } 
        return todo;
      });
    default:
      return initialState;
  }
};
