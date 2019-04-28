const min = 100;
const max = 255;

const random = () => {
    return Math.floor(Math.random() * (+max - +min) + +min)
}

export const getRandomColor = () => {
    return "rgb(" + random()
        + "," + random() + ","
        + random() + ")";
}
