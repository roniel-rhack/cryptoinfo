import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import CryptoInfo from "./reducers/CryptoInfo";

const reducer = combineReducers({
    CryptoInfo
});

const middlewares = applyMiddleware(
    thunk,
);

const store = createStore(reducer, middlewares);

export default store;