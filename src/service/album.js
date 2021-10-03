import request from "./request"


// 拿到所有新碟上架的信息
function requestAllAlbums(limit, currentPage = 1) {
    return request({
        url: `album/new?limit=${limit}&offset=${(currentPage - 1) * limit}`
    })
}

// 拿到新碟上架的信息
function requesetNewAlbum() {
    return request({
        url: `/album/newest`
    })
}

export {
    requestAllAlbums,
    requesetNewAlbum,
}