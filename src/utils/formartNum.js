
function formatNum(num) {
    if (num < 10000)
        return num;
    else if (num >= 10000) {
        if (num % 10000 > 5000)
            return `${Math.ceil((num / 10000).toFixed(2))}万`;
        else return `${Math.floor((num / 10000).toFixed(2))}万`;
    }
}

export default formatNum;