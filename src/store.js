// 引入createStore
import {
    createStore, applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

// 创建store容器，将状态值和action事件传入
const store = createStore((state = 0, action) => {
    switch (action.type) {
        case 'add':
            return state + 1;
        case 'minus':
            return state - 1;
        default:
            return state;
    }
}, applyMiddleware(thunk));

export default store;