export const buyItems = function (goldLoss, oldData) {
    oldData.money = oldData.money - (+goldLoss);
    return oldData;
}