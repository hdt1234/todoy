import { ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = [];

export default function(state = initialState, action){
    switch (action.type) {
        case ADD_TODO:
            return [...state, {
                id: action.payload.id,
                content: action.payload.content,
                selected: false,
                isDone: false,
                title: action.payload.title
            }];
        case TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
            );
        default:
            return state;
    }
}