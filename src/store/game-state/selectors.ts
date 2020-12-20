import { createSelector } from '@reduxjs/toolkit'
import {GAME_STATE_REDUCER_NAME} from "./const";

const getGameState = (state: any) => state[GAME_STATE_REDUCER_NAME];
const getGameIsStart = createSelector(getGameState, (state: any) => state?.gameIsStart)
const getGameIsEnd = createSelector(getGameState, (state: any) => state?.gameIsEnd)
const getGameScore = createSelector(getGameState, (state: any) => state?.gameScore)
const getIndexCurrentPlayer = createSelector(getGameState, (state: any) => state?.indexCurrentPlayer)
const getIndexCurrentTask = createSelector(getGameState, (state: any) => state?.indexCurrentTask)
const getTasks = createSelector(getGameState, (state: any) => state?.gameTasks)
const getAttempts = createSelector(getGameState, (state: any) => state?.attempts)



export const gameStateSelectors = {
  getGameIsStart: getGameIsStart,
  getGameIsEnd: getGameIsEnd,
  getGameScore: getGameScore,
  getIndexCurrentPlayer: getIndexCurrentPlayer,
  getIndexCurrentTask: getIndexCurrentTask,
  getTasks: getTasks,
  getAttempts: getAttempts,
}
