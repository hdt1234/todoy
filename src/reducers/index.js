import toggleDrawer from './toggleDrawer';
import tabSelected from './tabSelected';
import todo from './todo';
import toggleAdd from './toggleAdd';
import { combineReducers } from 'redux';

export default combineReducers({
    toggleDrawer,
    tabSelected,
    todo,
    toggleAdd
});