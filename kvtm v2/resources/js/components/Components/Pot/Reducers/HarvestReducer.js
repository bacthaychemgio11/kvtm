import { ENABLE_HARVEST, DISABLE_HAVEST, ANIMATION_HAVEST_ON } from "../Dispatch/type";

export function HarvestReducer(state, action) {
    switch (action.type) {
        case ENABLE_HARVEST:
            return { animation: false, canHarvest: true };
        case DISABLE_HAVEST:
            return { animation: false, canHarvest: false };
        case ANIMATION_HAVEST_ON:
            return { animation: true, canHarvest: false };
        default:
            return { animation: false, canHarvest: false };
    }
}

export const HarvestInitialValue = { animation: false, canHarvest: false }
