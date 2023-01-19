const initialState = [{
    id:1,
    toDo: 'Develop task with redux',
    done: false
}];

const toDoReducer = (state = initialState, action = {}) => {
    if(action.type === '[TODO] add todo') return [...state, action.payload];
    return state;
}

let toDos = toDoReducer();
const newToDo = {
    id:2,
    toDo: 'Develop task with NET 7',
    done: false
};

const addToDoAction = {
    type: '[TODO] add todo',
    payload: newToDo
}

toDos = toDoReducer(toDos, addToDoAction);
console.log(toDos);