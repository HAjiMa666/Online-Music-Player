import request from "./request";

// 请求轮播图数据
function getTopBanners() {
    return request({
        url: "/banner"
    })
}

// 请求热门推荐首页信息
function getSongCard(limit) {
    return request({
        url: `/personalized?limit=${limit}`
    })
}

// 请求新碟上架信息
function getNewAlbum() {
    return request({
        url: `/album/newest`
    })
}


/**
 * 
 * @param {*} limit:找到前面几个的排行榜,limit是数量 
 * @returns 请求全部排行榜
 */
function getRank() {
    return request({
        url: `/toplist/detatil`
    })
}

/**
 * 
 * @param {*} id:到时候请求下来的排行榜,找到排行榜中的id信息
 * @returns 用这个id在去请求排行榜的前100条歌曲的简略信息
 */
function getRankInfo(id) {
    return request({
        url: `/playlist/detail?id=${id}`
    })
}


export {
    getTopBanners,
    getSongCard,
    getNewAlbum,
    getRank,
    getRankInfo,
}