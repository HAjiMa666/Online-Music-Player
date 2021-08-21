import React, { memo } from 'react'


import { RecommendWrapper } from "./style"
import TopBanners from "./c-components/top-banners"
import HotRecommend from './c-components/hot-recommend'
import NewAlbum from './c-components/newAlbum'
import RankList from './c-components/rankList'






function ZXRecommend(props) {


    return (
        <RecommendWrapper>
            <TopBanners />
            <div className="wrap-v2">
                <div className="content_left wrap-v3">
                    <HotRecommend />
                    <NewAlbum />
                    <RankList />
                </div>
            </div>
        </RecommendWrapper>
    )
}

export default memo(ZXRecommend);





















// 这下面是用connect的常规做法,但是在页面繁多的情况下,这种操作可能会显得麻烦冗余,所以我们接下来用Hook的方式来将他们联系起来,请看上面
// function ZXRecommend(props) {
//     const { getTopBanners,topBanners } = props;
//     useEffect(() => {
//         getTopBanners();
//     }, [getTopBanners])
//     return (
//         <div>
//             <h1>recommend</h1>
//         </div>
//     )
// }

// const mapStateToProps = state => {
//     console.log(state);
//     return ({
//         topBanners: state.recommend.topBanners,
//     })
// };

// const mapDispatchToProps = dispatch => ({
//     // 这里说明一下,下面两个changeBanners并不是一个东西,第一个changeBanners是用来在本组件中进行调用的
//     // 而第二个changeBanners是在actionCreators中给reduxThunk传递的函数,用于在那里面发送异步请求的
//     getTopBanners: () => {
//         dispatch(getTopBannersAction());
//     }
// });

// export default connect(mapStateToProps, mapDispatchToProps)(memo(ZXRecommend));



