import {
    HIDE_PROGRESS_BAR, BAR_PERCENT_DEFAULT,
    HARVEST_TIME, BAR_TIMEOUT_DEFAULT, RUNNING_PROGRESS_BAR
} from '../Dispatch/type'

const percentLostPerSecond = +BAR_TIMEOUT_DEFAULT * 100 / (+HARVEST_TIME * 1000);

export function HarvestProgressBar(state, action) {
    switch (action.type) {
        case RUNNING_PROGRESS_BAR:
            let temp = +state.percent - (+percentLostPerSecond);
            return action.percent ? { percent: 100, show: true } : { percent: temp < 0 ? 0 : temp, show: temp < 100 && temp > 0 ? true : false };
        case HIDE_PROGRESS_BAR:
            return { percent: 0, show: false };
        default:
            return { percent: 0, show: false };
    }
}

export const HPBIntinialValue = { percent: 0, show: false };


