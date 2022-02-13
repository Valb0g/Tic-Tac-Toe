/* eslint-disable default-param-last */
import defaultBoardState from '../state/boardState';
import { CLICK, NEW_GAME } from '../types/types';

const boardReducer = (state = defaultBoardState, action) => {
  switch (action.type) {
    case CLICK:
      return { board: action.payload };
    case NEW_GAME:
      return action.payload;

    default:
      return state;
  }
};
export default boardReducer;
