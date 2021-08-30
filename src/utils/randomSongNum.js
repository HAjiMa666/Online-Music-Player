/**
 * 
 * @param {*} length:playList length 
 */
export default function getRandomSongNum(length) {
    const randomNum = Math.floor(Math.random() * length);
    return randomNum;
}
