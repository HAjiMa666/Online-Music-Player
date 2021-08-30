// 这一栏导入模块
import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';


// 这一栏导入自己的一些工具类模块
import routes from './routers';

// 这一栏导入相对应的组件
import ZXAppFooter from "components/app-footer"
import ZXAppHeader from "components/app-header"
import Player from "./pages/player/song-player"
import { Provider } from 'react-redux';
import store from "./store"


export default memo(function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <ZXAppHeader />
                {renderRoutes(routes)}
                <ZXAppFooter />
                <Player />
            </HashRouter>
        </Provider>

    )
})
