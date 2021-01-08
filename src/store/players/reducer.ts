import {createSlice, nanoid, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit'
import {PLAYERS_REDUCER_NAME} from "./const";
import {Player} from '../../types';
import { playerCompareById } from '../../utilities';


export type State = {
  players: Player[];
}

const initialState = {
  players: [],
}

export type Actions = {
  addPlayer: (player: Player) => any;
  addPlayers: (players: Player[]) => any;
  removePlayer: (player: Player) => any;
  changePlayer: (player: Player) => any;
}

export const playersState = createSlice<State, SliceCaseReducers<State>, string>({
  name: PLAYERS_REDUCER_NAME,
  initialState: initialState,
  reducers: {
    /** @desc */
    addPlayer: (state: State, action: PayloadAction<Player>) => {
      const playerIndex = state.players.findIndex(playerCompareById(action.payload.id));
      if (playerIndex !== -1) {
        state.players[playerIndex] = action.payload;
      } else {
        state.players.push({
          id: nanoid(),
          ...action.payload,
        });
      }
    },
    addPlayers: (state: State, action: PayloadAction<Player[]>) => {
      state.players = action.payload;
    },
    /** @desc */
    removePlayer: (state: State, action: PayloadAction<Player>) => {
      state.players = state.players.filter(item => item.id !== action.payload.id);
    },
    /** @desc */
    changePlayer: (state: State, action: PayloadAction<Player>) => {
      const player = state.players.findIndex((item) => item.id === action.payload.id);

      if (player === undefined) {
        throw new Error(`Player with id "${action.payload.id}" not found`);
      }
      state.players[player] = action.payload;
    },
  }
})

export const PlayersStateActions: Actions = playersState.actions as unknown as Actions;
