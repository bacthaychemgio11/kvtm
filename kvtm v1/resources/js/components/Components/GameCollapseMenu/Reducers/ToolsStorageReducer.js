import { CHANGE_ID_TOOLS_STORAGE, DECREASE_QUANTITY_ITEM_TOOL, INCREASE_QUANTITY_ITEM_TOOL } from "../Dispatch/type";
import { dataToolsStorage } from "../Helper/FindToolsStorage";
import { tools } from "../../../Data";

export const startValueOfToolsStorage = function (idPlayer) {
    return { data: dataToolsStorage(idPlayer) };
}

function changeData(itemType, quantity, oldData) {
    let idItem = tools.find(ele => ele.type == itemType).id;
    let pickedTools = oldData.find(ele => ele.id == idItem);

    pickedTools.quantity = +pickedTools.quantity + (+quantity);

    return oldData;
}

export const ToolsStorageReducer = function (state, action) {
    switch (action.type) {
        case INCREASE_QUANTITY_ITEM_TOOL:
            return { data: changeData(action.itemType, action.quantity, state.data) };
        case DECREASE_QUANTITY_ITEM_TOOL:
            return { data: changeData(action.itemType, action.quantity, state.data) };
        case CHANGE_ID_TOOLS_STORAGE:
            return { data: dataToolsStorage(action.idUser) };

        default:
            return startValueOfToolsStorage;
    }
}