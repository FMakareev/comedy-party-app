import { createSelector } from '@reduxjs/toolkit'
import { PLAYERS_REDUCER_NAME } from './const';
import { Store } from '../store';

const getCurrentGameState = (state: Store) => state[PLAYERS_REDUCER_NAME];
const getPlayersFromCurrentGameState = createSelector(getCurrentGameState, (state: any): any[] => state?.players)


export const playersStateSelectors = {
  getPlayers: getPlayersFromCurrentGameState,
}
