import { LOG_IN, LOG_OUT, HARVEST, LEVEL_UP, BUY_ITEMS } from "../Dispatch/type";
import { playerData } from "../Data";
import { harvestFunction } from "../Helper/HarvestFunction";
import { changeLevel } from "../Helper/LevelFunction";
import { buyItems } from "../Helper/BuyItems";

export const startValueOfUser = function (initialState) {
    return { data: playerData.find(ele => ele.id == initialState) };
}

export function dispatchUser(state, action) {
    let temp;
    switch (action.type) {
        case LOG_IN:
            let tempData = playerData.find(ele => ele.id == action.id);
            return { data: tempData }
        case LOG_OUT:
            return startValueOfUser;
        case HARVEST:
            temp = harvestFunction(action.gold, action.exp, state.data);
            return { data: temp };
        case LEVEL_UP:
            temp = changeLevel(action.exp, state.data);
            return { data: temp };
        case BUY_ITEMS:
            temp = buyItems(action.gold, state.data);
            return { data: temp };

        default:
            return startValueOfUser;
    }
}