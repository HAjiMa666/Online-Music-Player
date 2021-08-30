import {
    CHANGE_BANNERS, CHANGE_NEWALBUM, CHANGE_SONGCARD, GET_ALLRANK, UP_RANK, NEW_RANK, ORIGINAL_RANK
} from "./constants"

// 在自己封装的网络请求中,拿到请求某项数据的请求,在actionCreator中调用
import { getTopBanners, getSongCard, getNewAlbum, getRank, getRankInfo } from "@/service/recommend"

// 对于action的创建,是一个函数,因为action有时候是要根据参数进行相对应的操作,所以需要传参,函数的返回值是一个对象
const ChangeBannersAction = (topBanners) => ({
    type: CHANGE_BANNERS,
    topBanners,
})

const changeSongCardAction = (songCards) => ({
    type: CHANGE_SONGCARD,
    songCards,
})

const changeNewAlbumsAction = (newAlbums) => ({
    type: CHANGE_NEWALBUM,
    newAlbums,
})

const changeAllRankAction = (allRank) => ({
    type: GET_ALLRANK,
    allRank
})

const showUpRankAction = (upRank) => ({
    type: UP_RANK,
    upRank,
})
const showNewRankAction = (newRank) => ({
    type: NEW_RANK,
    newRank,
})
const showOriginalRankAction = (originalRank) => ({
    type: ORIGINAL_RANK,
    originalRank,
})



// 这里为什么要传递一个这样的函数呢,而不是直接传递我返回的这个函数呢
// 因为在使用dispatch的时候,我们可能要往函数传递一些参数,来形成一个新的函数,如果直接传递返回函数
// 在这个组件的调用过程中,不能传递参数

// 获取轮播图数据
const getTopBannersAction = () => {
    return (
        dispatch => {
            getTopBanners().then(res => {
                dispatch(ChangeBannersAction(res.data.banners));
            })
        }
    )
}

// 获取热门歌单数据
const getSongCardAction = (limit) => {
    return (
        dispatch => {
            getSongCard(limit).then(res => {
                dispatch(changeSongCardAction(res.data.result));
            })
        }
    )
}

// 获取首页新碟上架的数据
const getNewAlbumsAction = () => {
    return dispatch => {
        getNewAlbum().then(res => {
            dispatch(changeNewAlbumsAction(res.data.albums));
        })
    }
}

// 展示榜单数据
const getallRankAcrtion = () => {
    return dispatch => {
        getRank().then(res => {
            dispatch(changeAllRankAction(res.data.list))
        });

    }
}

const getRankListsAction = (id) => {
    return dispatch => {
        getRankInfo(id).then(res => {
            switch (id) {
                case 19723756:    //飙升榜
                    dispatch(showUpRankAction(res.data.playlist));
                    break;
                case 3779629:     //新歌榜
                    dispatch(showNewRankAction(res.data.playlist))
                    break;
                case 2884035:     //原创榜
                    dispatch(showOriginalRankAction(res.data.playlist))
                    break;
                default:
                    return {};
            }
        })
    }
}



export {
    getTopBannersAction,
    getSongCardAction,
    getNewAlbumsAction,
    getRankListsAction,
    getallRankAcrtion
}