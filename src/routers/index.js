import { Redirect } from 'react-router-dom';
import ZXFriends from '../pages/friends';
import ZXMine from '../pages/mine';
import ZXClient from '../pages/downloadClient';
import ZXDiscover from "../pages/discover"
import ZXRecommend from '../pages/discover/children_Pages/recommend';
import ZXAlbum from '../pages/discover/children_Pages/album';
import ZXArtist from '../pages/discover/children_Pages/artist';
import ZXdjRadio from '../pages/discover/children_Pages/djRadio';
import ZXplayList from '../pages/discover/children_Pages/playList';
import ZXRankList from '../pages/discover/children_Pages/rankList';
import ZXPlayer from "../pages/player/song-page/index"



// 在路由中,不仅可以返回组件,同时也可以返回一个render函数,到时候,他会执行render函数
// 如果你不想在用户输入网址后,后面又加上了一个地址,你可以使用render函数,让路由进行一个重定向到其他的首页,这样可以避免行进去就加上地址

const routes = [
    {
        path: "/",
        exact: true,
        render: () => {
            return <Redirect to="/discover" />
        },
    },
    {
        // 不要在父路由上加上exact属性,因为如果父路由精确匹配了,那么子路由就无法匹配到,那么,相对应的路由就无法显示出来
        path: "/discover",
        component: ZXDiscover,
        routes: [
            {
                path: "/discover",
                exact: true,
                render: () => {
                    return <Redirect to="/discover/recommend" />
                }
            },
            {
                path: "/discover/recommend",
                title: "推荐",
                component: ZXRecommend,
            },
            {
                path: "/discover/rankList",
                title: "排行榜",
                component: ZXRankList,

            },
            {
                path: "/discover/playList",
                title: "歌单",
                component: ZXplayList,

            },
            {
                path: "/discover/djradio",
                title: "主播电台",
                component: ZXdjRadio,

            },
            {
                path: "/discover/artist",
                title: "歌手",
                component: ZXArtist,
            },
            {
                path: "/discover/album",
                title: "新碟上架",
                component: ZXAlbum,
            },
            {
                path: `/discover/player`,
                component: ZXPlayer,
            }
        ]
    },
    {
        path: "/mine",
        component: ZXMine,
    },
    {
        path: "/friends",
        component: ZXFriends,
    },
    {
        path: "/download",
        component: ZXClient,
    },

];

export default routes;