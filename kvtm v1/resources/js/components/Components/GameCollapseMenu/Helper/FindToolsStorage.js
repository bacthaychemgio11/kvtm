import { tools, toolsStorage } from "../../../Data";

export const dataToolsStorage = function (idPlayer) {
    let temp = toolsStorage.find(ele => ele.idPlayer == idPlayer);

    temp.data.forEach(ele => {
        ele.url = tools.find(item => item.id == ele.idTools).url;
        ele.cost = tools.find(item => item.id == ele.idTools).cost;
        ele.type = tools.find(item => item.id == ele.idTools).type;
    });

    return temp.data;
}