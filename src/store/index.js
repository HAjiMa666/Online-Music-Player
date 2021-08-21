// 1. 从redux中引入createStore,这个createStore是进行状态容器的创建
// 2. 引入applyMiddleware,这个是用于应用中间件的,在这个项目中,我们要引入redux-thunk这个中间件,用它进行一个异步网络请求
// 3. 引入compose,这个是用来启动浏览器中redux的调试工具,前提是你在浏览器中安装了redux的调试工具
import { createStore, applyMiddleware, compose } from "redux"

import reduxThunkMiddleWare from "redux-thunk";
import zReducer from "./reducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
const storeEnhancer = applyMiddleware(reduxThunkMiddleWare);

// 在引用中间件后,在状态容器中,你得使用composeEnhancers将应用的中间件进行一个包裹,再往里面传递,在这个函数的定义内,第二个参数传递就是composeEnhancers
const store = createStore(zReducer, composeEnhancers(storeEnhancer));

export default store;