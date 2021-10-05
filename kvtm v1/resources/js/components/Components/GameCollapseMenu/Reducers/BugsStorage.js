import { CHANGE_BUGS_QUANTITY } from "../Dispatch/type";
import { findBugsStorage } from "../Helper/FindBugsStorage";

export const startValueOfBugsStorage = function (idPlayer) {
    return { data: findBugsStorage(idPlayer) };
}

function updateQuantity(idBugs, quantity, oldData) {
    let tempData = oldData.find(ele => ele.idBugs == idBugs);
    tempData.quantity = +tempData.quantity + (+quantity);

    return oldData;
}

export const bugsStorgageReducer = function (state, action) {
    switch (action.type) {
        case CHANGE_BUGS_QUANTITY:
            let temp = updateQuantity(action.idBugs, action.quantity, state.data)
            console.log(temp)
            return { data: temp };
        default:
            return startValueOfBugsStorage;
    }
}