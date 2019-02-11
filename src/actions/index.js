export const TOGGLE_DRAWER = "TOGGLE_DRAWER";
export const TAB_SELECTED = "TAB_SELECTED";
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const TOGGLE_ADD = "TOGGLE_ADD";

export const toggleDrawer = ({
    type: TOGGLE_DRAWER
});

export const tabSelected = (tabNo) => ({
    type: TAB_SELECTED,
    payload: tabNo
});

export const toggleAdd = () => ({
    type: TOGGLE_ADD
})

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo
});

export const toggleTodo = (todo) => ({
    type: TOGGLE_TODO,
    payload: todo
});