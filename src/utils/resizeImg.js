/**
 * 
 * @param {*} url:图片的url 
 * @param {*} size :后面你要接的图片大小
 */
function resizeImg(url, size) {
    return `${url}?param=${size}y${size}`
}

export default resizeImg
