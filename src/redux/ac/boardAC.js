import { CLICK, NEW_GAME } from '../types/types';

export const clickAC = (payload) => ({
  type: CLICK,
  payload,
});
export const newGameAC = (payload) => ({
  type: NEW_GAME,
  payload,
});
