import {createSlice, nanoid, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit'
import {GAME_STATE_REDUCER_NAME} from "./const";
import {Player, GameScore, Task} from '../../types';

export type State = {
  gameScore: GameScore | null;
  gameIsStart: boolean;
  gameIsEnd: boolean;
  indexCurrentPlayer: number;
  indexCurrentTask: number;
  attempts: number;
  gameTasks: Task[];
}

const initialState = {
  gameScore: null,
  gameIsStart: false,
  gameIsEnd: false,
  indexCurrentPlayer: 0,
  indexCurrentTask: 0,
  attempts: 3,
  gameTasks: [],
}

export type Actions = {
  createNewGame: (props: { players: Player[]; gameTasks: Task[] }) => any;
  nextPlayer: (props: { score: number }) => any;
  nextTask: () => any;
}

/**
 * @desc редьюсер отвечает за состояние партии, на начало партии состояние пустое,
 * в конце партии состояние партии целым объектом сохраняется в состояние scoreTable.
 * В состояние партии входит:
 * 1. список участников, копируется из state.players
 * 2. кто ходит сейчас?
 * 3. список вопросов, копируется из state.gameTasks
 * 4. какой сейчас вопрос?
 * 5. началась ли игра?
 * 6. показать ответ TODO
 * */
export const gameState = createSlice<State, SliceCaseReducers<State>, string>({
  name: GAME_STATE_REDUCER_NAME,
  initialState: initialState,
  reducers: {

    createNewGame: (state: State, {payload}: PayloadAction<{ players: Player[]; gameTasks: Task[] }>) => {

      const gameScore = {
        id: nanoid(),
        players: payload.players.reduce((accum: any[], item: Player) => {
          accum.push({
            score: 0,
            player: item,
          });
          return accum;
        }, [])
      };

      state.gameIsStart = true;
      state.gameIsEnd = false;
      state.gameTasks = payload.gameTasks;

      state.gameScore = gameScore;
    },

    nextTask: (state: State) => {
      if (state.indexCurrentTask < state.gameTasks.length - 1) {
        state.indexCurrentTask += 1;
      } else {
        state.gameIsEnd = true;
        state.gameIsStart = false;
      }
    },
    /**
     * @desc следующая попытка игрока, получает на вход кол-во полученных балов за текущую задачу
     * если оно === 0, то попытки сбрасываются и ход переходит к другому игроку
     * иначе делает инкримент очков у игрока и уменьшает кол-во попыток,
     * если после уменьшения кол-во попыток === 0, то
     * ход переходит к следующему игроку.
     * */
    nextPlayer: (state: State, {payload}: PayloadAction<{ score: number }>) => {
      if (!state.gameScore) {
        return;
      }
      if (payload.score > 0 && state.attempts > 1) {
        state.attempts -= 1;
        state.gameScore.players[state.indexCurrentPlayer].score += payload.score;
      } else {
        state.attempts = 3;
        if (state?.gameScore && state.gameScore.players.length > 0) {
          if (state.indexCurrentPlayer >= state.gameScore.players.length - 1) {
            state.indexCurrentPlayer = 0;
          } else {
            state.indexCurrentPlayer += 1;
          }
        }
      }
    },
  },
  extraReducers: {}
})

export const Actions: Actions = gameState.actions as unknown as Actions;
