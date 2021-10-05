import { gameStatusStorage } from "../../../Data";

export const openLine = function (idPlayer, idLine) {
    let data = gameStatusStorage.find(ele => ele.idPlayer == idPlayer);
    let result = { ...data };

    let arrRes = [];
    for (let index = 0; index < 2; index++) {
        let nameTop = `top_line${index}`;
        let nameUnlock = `line${index}_open`;
        let element = {
            top: result[nameTop],
            unlock: +idLine == index ? true : result[nameUnlock]
        }
        arrRes.push(element);
    }

    return arrRes;
}