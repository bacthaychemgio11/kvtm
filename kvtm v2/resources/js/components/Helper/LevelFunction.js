import { expPerLevel } from "../Data";

export const changeLevel = function (currentExp, oldData) {
    if (oldData.level == expPerLevel[expPerLevel.length - 1].id) {
        oldData.exp = expPerLevel[expPerLevel.length - 1].expRequired;
        return oldData;
    }
    else {
        let requiredExp = expPerLevel.find(ele => ele.id == oldData.level).expRequired;
        let expLeft = 0;
        if ((+currentExp) > (+requiredExp)) {
            expLeft = (+currentExp) - (+requiredExp)
        }

        oldData.level = (+oldData.level) + 1;
        oldData.exp = expLeft;
        return oldData;
    }
}