import { dataSeedsStorage } from '../Helper/SeedsStorage';
import { DECREASE_SEED, INCREASE_SEED, CHANGE_ID_STORAGE } from '../Dispatch/type';


// ADD FIRST TIME FOR FIXING ERROR
// let firstTime = 0;
function changeData(id, quantity, data) {
    let temp = data.find(ele => ele.id == id);
    // if (firstTime == 0) {
    //     temp.quantity = +temp.quantity + 0;
    // }
    // else {
        temp.quantity = +temp.quantity + (+quantity);
    // }
    // firstTime++;
    return data;
}

export const initialValueOfSeedsStorage = { data: dataSeedsStorage(0) };
export const SeedsStorageReducer = (state, action) => {
    let tempdata = state.data;
    switch (action.type) {
        case INCREASE_SEED:
            tempdata = changeData(action.id, action.quantity, state.data)
            return { data: tempdata };
        case DECREASE_SEED:
            tempdata = changeData(action.id, action.quantity, state.data)
            return { data: tempdata };
        case CHANGE_ID_STORAGE:
            return { data: dataSeedsStorage(action.idUser) };
        default:
            return { data: state.data };
    }
}