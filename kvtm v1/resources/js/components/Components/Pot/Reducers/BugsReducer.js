import { HAVE_BUG, NO_BUG } from "../Dispatch/type";

export const intialBugValue = { haveBug: false };

export function BugsReducer(state, action) {
    switch (action.type) {
        case HAVE_BUG:
            return { haveBug: true };
        case NO_BUG:
            return { haveBug: false };
        default:
            return intialBugValue;
    }
}

