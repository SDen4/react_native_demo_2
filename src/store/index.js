import { createStore, combineReducers } from 'redux';
import { postReducer } from './reducers/post';

const routeReducer = combineReducers({
    post: postReducer,
});

export default createStore(routeReducer);
