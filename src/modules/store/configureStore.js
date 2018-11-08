import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import clustersReducer from "./clusters/reducers";
import consumersReducer from "./consumers/reducers";
import rootsReducer from "./roots/reducers";
import topicsReducer from "./topics/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunkMiddleware];

export default function configureStore(preloadedState) {
    return createStore(
        combineReducers({
            clusters: clustersReducer,
            consumers: consumersReducer,
            roots: rootsReducer,
            topics: topicsReducer,
        }),
        preloadedState,
        composeEnhancers(applyMiddleware(...middleware))
    )
}