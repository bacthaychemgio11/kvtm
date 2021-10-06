export function changeSeconds(totalSeconds) {
    let totalS = +totalSeconds;
    let h = Math.floor(totalS / 3600);
    let m = Math.floor(totalS % 3600 / 60);
    let s = Math.floor(totalS % 3600 % 60);

    return `${("0" + h).slice(-2)}:${("0" + m).slice(-2)}:${("0" + s).slice(-2)}`;
}