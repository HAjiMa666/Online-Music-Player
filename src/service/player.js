import request from "./request"

// 拿到歌曲的详细信息
function requestSongDetail(ids) {
    return request({
        url: `/song/detail?ids=${ids}`
    })
}

// 拿到播放歌曲的url
function requestSongUrl(id) {
    return request({
        url: `/song/url?id=${id}`
    })
}

// 拿到歌词
function requestLyric(id) {
    return request({
        url: `/lyric?id=${id}`
    })
}

export {
    requestSongDetail,
    requestSongUrl,
    requestLyric,
}