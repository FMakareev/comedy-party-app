import {createSlice, nanoid, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit'
import {PLAYERS_REDUCER_NAME} from "./const";
import {Player} from '../../types';


export type State = {
  players: Player[];
}

const initialState = {
  players: [],
}

export type Actions = {
  addPlayer: (player: Player) => any;
  removePlayer: (player: Player) => any;
  changePlayer: (player: Player) => any;
}

export const playersState = createSlice<State, SliceCaseReducers<State>, string>({
  name: PLAYERS_REDUCER_NAME,
  initialState: initialState,
  reducers: {
    /** @desc */
    addPlayer: (state: State, action: PayloadAction<Player>) => {
      state.players.push({
        id: nanoid(),
        ...action.payload,
      });
    },
    /** @desc */
    removePlayer: (state: State, action: PayloadAction<Player>) => {
      state.players = state.players.filter(item => item.id !== action.payload.id);
    },
    /** @desc */
    changePlayer: (state: State, action: PayloadAction<Player>) => {
      const player = state.players.findIndex((item) => item.id === action.payload.id);
      state.players[player] = action.payload;
    },
  }
})

export const Actions: Actions = playersState.actions as unknown as Actions;
