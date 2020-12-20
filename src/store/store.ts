import { configureStore } from '@reduxjs/toolkit'

import {tasksSlice} from "./tasks/reducer";

import {gameState} from "./game-state/reducer";
import { GAME_STATE_REDUCER_NAME } from './game-state/const';

import { playersState } from './players/reducer';
import {PLAYERS_REDUCER_NAME} from "./players/const";

import { scoreTableState } from './scoreTable/reducer';
import { SCORE_TABLE_REDUCER_NAME } from './scoreTable/const';
import { TASKS_REDUCER_NAME } from './tasks/const';


export const store = configureStore({
  reducer: {
    [TASKS_REDUCER_NAME]: tasksSlice.reducer,
    [GAME_STATE_REDUCER_NAME]: gameState.reducer,
    [PLAYERS_REDUCER_NAME]: playersState.reducer,
    [SCORE_TABLE_REDUCER_NAME]: scoreTableState.reducer,
  }
})




