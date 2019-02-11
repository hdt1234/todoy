export const TOGGLE_DRAWER = "TOGGLE_DRAWER";
export const TAB_SELECTED = "TAB_SELECTED";

export const toggleDrawer = ({
    type: TOGGLE_DRAWER
});

export const tabSelected = (tabNo) => ({
    type: TAB_SELECTED,
    payload: tabNo
})