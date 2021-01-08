import {createSelector} from '@reduxjs/toolkit'
import {last} from 'lodash';
import {GAME_STATE_REDUCER_NAME} from "./const";
import {Store} from "../store";
import {GameConfig, State} from "./reducer";
import {Player, Maybe} from '../../types';

const getGameState = (state: Store) => state[GAME_STATE_REDUCER_NAME];


const getGameId = createSelector(getGameState, (state: State) => state?.gameId)
const getPlayerAttempts = createSelector(getGameState, (state: State) => state?.playerAttempts)

const getGamePlayers = createSelector(getGameState, (state: State) => state?.players)
const getGameCurrentPlayerIndex = createSelector(getGameState, (state: State) => state.currentPlayer)
const getGameCurrentPlayer = createSelector(getGameState, (state: State): Maybe<Player> => state?.players[state.currentPlayer])

const getCurrentRound = createSelector(getGameState, (state: State) => state?.currentRound)

const getGameQuestions = createSelector(getGameState, (state: State) => state?.gameQuestions || [])

const getThemeHistory = createSelector(getGameState, (state: State) => state?.themeHistory)
const getCurrentTheme = createSelector(getGameState, (state: State) => last(state?.themeHistory))

const getCurrentQuestion = createSelector(getGameState, (state: State) => state?.gameQuestions[state?.currentQuestion])
const getCurrentQuestionIndex = createSelector(getGameState, (state: State) => state?.currentQuestion)

const getIsEndGame = createSelector(getGameState, (state: State) => state?.currentRound >= 2);

const getIsShowAnswer = createSelector(getGameState, (state: State): boolean =>
  state.showAnswer
)
const getGameConfig = createSelector(getGameState, (state: State): GameConfig =>
  state.gameConfig
)

export const gameStateSelectors = {
  getGameId,
  getPlayerAttempts,
  getGamePlayers,
  getGameCurrentPlayer,
  getGameCurrentPlayerIndex,
  getCurrentRound,
  getGameQuestions,
  getCurrentQuestion,
  getCurrentQuestionIndex,
  getCurrentTheme,
  getThemeHistory,
  getIsShowAnswer,
  getIsEndGame,
  getGameConfig,
}
