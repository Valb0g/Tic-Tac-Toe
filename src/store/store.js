import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import boardReducer from '../redux/reducer/boardReducer';

const store = createStore(boardReducer, composeWithDevTools(applyMiddleware()));

export default store;
