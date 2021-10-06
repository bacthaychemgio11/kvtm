import { flowers } from "../../../Data";
import { FERTILIZE_FLOWER, SET_PLANTED_FLOWER } from "../Dispatch/type";

export const startValueOfPlantedFlower = flowers[0];

function fertilize(oldData) {
    oldData.expGain = 2 * (+oldData.expGain);

    return oldData;
}

export const PickedFlowerReducer = function (state, action) {
    switch (action.type) {
        case SET_PLANTED_FLOWER:
            return action.flower;
        case FERTILIZE_FLOWER:
            return fertilize(state);
        default:
            return startValueOfPlantedFlower;
    }
}