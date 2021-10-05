import { CLOSE_COLLAPSE, OPEN_COLLAPSE } from "../../Pot/Dispatch/type";

export const innitialItemVal = {};
export function CollapseItemReducer(state, action) {
    switch (action.type) {
        case OPEN_COLLAPSE:

            break;
        case CLOSE_COLLAPSE:

            break;
        default:
            return innitialItemVal;
    }
}