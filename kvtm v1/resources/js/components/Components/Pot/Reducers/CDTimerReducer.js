import { START_TIMER, COUNTING_TIMER, END_TIMER, DEFAULT_SECOND, DEFAULT_STATE_CLOCK } from "../Dispatch/type";

export function CDTimerReducer(state, action) {
    switch (action.type) {
        case START_TIMER:
            return { active: true, seconds: action.seconds };
        case COUNTING_TIMER:
            return { active: true, seconds: action.seconds };
        case END_TIMER:
            return { active: DEFAULT_STATE_CLOCK, seconds: DEFAULT_SECOND };
        default:
            return { active: DEFAULT_STATE_CLOCK, seconds: DEFAULT_SECOND };
    }
}

export const initialValue = { active: DEFAULT_STATE_CLOCK, seconds: DEFAULT_SECOND }
