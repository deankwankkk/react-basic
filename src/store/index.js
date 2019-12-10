import {createStore, applyMiddleware, combineReducers} from 'redux';
import {CounterReducer} from './counter.redux';
import thunk from 'redux-thunk';

const store = createStore(combineReducers({counter: CounterReducer}), applyMiddleware(thunk))
export default store;