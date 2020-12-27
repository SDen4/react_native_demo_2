import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { postReducer } from './reducers/postReducer';

const routeReducer = combineReducers({
    post: postReducer,
});

export default createStore(routeReducer, applyMiddleware(thunk));
