import { bugsStorage, playerData, bugs } from "../../../Data"

export const findBugsStorage = function (idPlayer) {
    // find storage id
    let idStorage = playerData.find(ele => ele.id == idPlayer).bugsStorageId;

    // find data storage
    let data = bugsStorage.find(ele => ele.id == idStorage).data;

    // find bugs img and add properties
    data.forEach(ele => {
        let url = bugs.find(bug => bug.id == ele.idBugs).bugImg;
        let name = bugs.find(bug => bug.id == ele.idBugs).name;
        ele.url = url;
        ele.name = name;
    });

    return data;
}