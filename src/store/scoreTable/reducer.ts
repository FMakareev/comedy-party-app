import {createSlice, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit'
import {get} from 'lodash';
import {SCORE_TABLE_REDUCER_NAME} from "./const";
import {GameScore} from '../../types';


export type State = {
  gameMap: {
    [gameId: string]: GameScore
  }
}

const initialState = {
  gameMap: {},
}

export type Actions = {

}

export const scoreTableState = createSlice<State, SliceCaseReducers<State>, string>({
  name: SCORE_TABLE_REDUCER_NAME,
  initialState: initialState,
  reducers: {
    setGameScore: (state: State, {payload}: PayloadAction<{
      gameId: string;
      playerId: string;
      score: number;
    }>) => {
      const gameScore = get(state.gameMap, [payload.gameId, 'players', payload.playerId]);
      if (gameScore) {
        gameScore.score += payload.score
      } else {
        console.error(`not found game by gameId=${payload.gameId}, playerId=${payload.playerId}`)
      }
    },
  }
})

export const Actions: Actions = scoreTableState.actions as unknown as Actions;
