import { OPEN_LINE } from "../Dispatch/type";
import { openLine } from "../Helper/OpenLine";
import { gameStatusStorage } from "../../../Data";

export const defaultLineValue = function (idPlayer) {
    let data = gameStatusStorage.find(ele => ele.idPlayer == idPlayer);
    let result = { ...data };

    let arrRes = [];
    for (let index = 0; index < 2; index++) {
        let nameTop = `top_line${index}`;
        let nameUnlock = `line${index}_open`;
        let element = {
            top: result[nameTop],
            unlock: result[nameUnlock]
        }
        arrRes.push(element);
    }

    return arrRes;
}

export const LineReducer = function (state, action) {
    switch (action.type) {
        case OPEN_LINE:
            return openLine(action.idPlayer, action.idLine);

        default:
            return defaultLineValue(0);
    }
}