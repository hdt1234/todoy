import { ADD_TODO, TOGGLE_TODO, SELECT_TODO, DELETE_TODO, LOAD_TODO } from '../actions';

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
                todo.id === action.payload.id ? { ...todo, isDone: !todo.isDone } : todo
            );
        case SELECT_TODO:
            return state.map(todo => 
                todo.id === action.payload.id ? { ...todo, selected: !todo.selected} : todo
            );
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload.id);
        case LOAD_TODO:
            return [...state, {
                id: action.payload.id,
                content: action.payload.content,
                selected: false,
                isDone: action.payload.isDone,
                title: action.payload.title
            }]
        default:
            return state;
    }
}