import {createSelector} from '@reduxjs/toolkit'
import {has} from 'lodash';
import {SCORE_TABLE_REDUCER_NAME} from './const';
import {PlayerScore, Maybe} from "../../types";
import {playerScoreCompareByPlayerId} from "../../utilities";

const getCurrentGameState = (state: any) => state[SCORE_TABLE_REDUCER_NAME];

const getPlayersScore = (gameId?: string) => createSelector(getCurrentGameState, (state): Maybe<PlayerScore[]> => {
  if ((!gameId) || (gameId && !has(state.gameMap, [gameId]))) {
    return null;
  }
  return state.gameMap[gameId].players;
})
const getPlayerScoreById = (gameId?: string, playerId?: string) =>
  createSelector(getPlayersScore(gameId), (players): Maybe<PlayerScore> => {
    return players && playerId && players.find(playerScoreCompareByPlayerId(playerId)) || null;
  })

export const scoreTableStateSelectors = {
  getPlayerScoreById,
  getPlayersScore,
}
