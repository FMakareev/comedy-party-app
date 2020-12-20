import { createSelector } from '@reduxjs/toolkit'
import { PLAYERS_REDUCER_NAME } from './const';

const getCurrentGameState = (state: any) => state[PLAYERS_REDUCER_NAME];
const getPlayersFromCurrentGameState = createSelector(getCurrentGameState, (state: any) => state?.players)


export const playersStateSelectors = {
  getPlayers: getPlayersFromCurrentGameState,
}
