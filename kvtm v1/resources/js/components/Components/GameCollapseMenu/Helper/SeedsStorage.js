import { seedStorage, flowers } from "../../../Data";
import { findSeedsImg } from "./FindSeedsImg";


export const dataSeedsStorage = function (idStorage) {
    let temp = seedStorage.find(ele => ele.id == idStorage);

    temp.data.forEach(ele => {
        let urlImg = findSeedsImg(ele.id, flowers);
        ele.seedImg = urlImg;

        // ADD LEVEL TO SORT DATA
        flowers.forEach(element => {
            if (element.id == ele.id) {
                ele.levelRequire = element.levelRequire;
            }
        });
    });

    temp.data.sort(function (ele1, ele2) {
        return ele1.levelRequire - ele2.levelRequire;
    })

    return temp.data;
}

