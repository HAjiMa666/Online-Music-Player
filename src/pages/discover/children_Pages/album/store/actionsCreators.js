import { GETALLALBUM, GETHOTALBUM } from "./constants"

import { requestAllAlbums, requesetNewAlbum } from "../../../../../service/album"

const getHotAlbumAction = (hotAlbum) => {
    return {
        type: GETHOTALBUM,
        hotAlbum,
    }
}

const getAllAlbumAction = (allAlbum) => {
    return {
        type: GETALLALBUM,
        allAlbum,
    }
}

const getAllAlbum = (limit, currentPage) => {
    return (
        dispatch => {
            requestAllAlbums(limit, currentPage).then(res => {
                console.log(res.data.albums);
                dispatch(getAllAlbumAction(res.data.albums))
            })
        }
    )
}

const getHotAlbum = () => {
    return dispatch => {
        requesetNewAlbum().then(res => {
            dispatch(getHotAlbumAction(res.data.albums))
        })
    }
}

export {
    getAllAlbum,
    getHotAlbum,
}

