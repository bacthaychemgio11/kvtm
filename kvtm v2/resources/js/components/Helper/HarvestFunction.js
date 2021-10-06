export const harvestFunction = function (moneyGain, expGain, oldData) {
    oldData.money = oldData.money + (+moneyGain);
    oldData.exp = oldData.exp + (+expGain);
    return oldData;
}