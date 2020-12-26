import { createStore, combineReducers } from 'redux';
import { postReducer } from './reducers/postReducer';

const routeReducer = combineReducers({
    post: postReducer,
});

export default createStore(routeReducer);
