import {createSlice, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit'
import {has} from 'lodash';
import {SCORE_TABLE_REDUCER_NAME} from "./const";
import {GameScore, Maybe, Player, PlayerScore} from '../../types';
import {playerScoreCompareByPlayerId} from "../../utilities";


export type State = {
  gameMap: {
    [gameId: string]: GameScore
  }
}

const initialState = {
  gameMap: {}
}

export type ScoreTableStateActions = {
  setGameScore: (props: {
    gameId: Maybe<string>;
    player: Player;
    score: number;
  }) => any;
}


export const scoreTableState = createSlice<State, SliceCaseReducers<State>, string>({
  name: SCORE_TABLE_REDUCER_NAME,
  initialState: initialState,
  reducers: {
    setGameScore: (state: State, {payload}: PayloadAction<{
      gameId: string;
      player: Player;
      score: number;
    }>) => {

      if (has(state.gameMap, [payload.gameId])) {
        const players: PlayerScore[] = state.gameMap[payload.gameId].players

        const targetIndex = players.findIndex(playerScoreCompareByPlayerId(payload.player.id))

        if (targetIndex !== -1) {
          players[targetIndex].score += payload.score;
        } else {
          players.push({
            score: payload.score,
            player: payload.player,
          })
        }

      } else {
        state.gameMap[payload.gameId] = {
          id: payload.gameId,
          players: [
            {
              score: payload.score,
              player: payload.player,
            }
          ]
        }
      }
    },
  }
})

export const ScoreTableStateActions: ScoreTableStateActions = scoreTableState.actions as unknown as ScoreTableStateActions;
