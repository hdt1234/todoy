import { TAB_SELECTED } from '../actions';

const initialState = 0

export default function(state = initialState, action){
    switch (action.type) {
        case TAB_SELECTED:
            return action.payload;
        default:
            return state;
    }
}