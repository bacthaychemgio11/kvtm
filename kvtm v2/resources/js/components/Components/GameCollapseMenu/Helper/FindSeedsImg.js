export const findSeedsImg = (id, flowerArr) => {
    let temp = flowerArr.find(ele => ele.id == id);
    return temp.seedImg;
}