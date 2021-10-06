export function findBugsImg(idBug, bugsArr) {
    let result = null;
    bugsArr.forEach(element => {
        if (element.id === idBug) {
            result = element.bugImg;
        }
    });
    return result;
}