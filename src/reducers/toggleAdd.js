import {TOGGLE_ADD} from '../actions';

export default function(state=false, action){
    switch (action.type) {
        case TOGGLE_ADD:
            return !state;
        default:
            return state;
    }
}