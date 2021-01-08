import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import {gameState, State as GameState} from "./game-state/reducer";

import {playersState, State as PlayersState} from './players/reducer';

import {questionsSlice, State as QuestionState} from "./questions/reducer";
import {scoreTableState, State as ScoreTableState} from "./scoreTable/reducer";


export type Store = {
  gameState: GameState;
  players: PlayersState;
  questions: QuestionState;
  scoreTable: ScoreTableState;
}
const getPersistConfig = (key: string, blacklist?: string[]) => ({
  key: key,
  storage: storage,
  blacklist
});


const createRootReducer = () => combineReducers({
  // gameState: persistReducer(getPersistConfig('gameState'), gameState.reducer),
  gameState: gameState.reducer,
  scoreTable: persistReducer(getPersistConfig('scoreTable'), scoreTableState.reducer),
  players: persistReducer(getPersistConfig('players'), playersState.reducer),
  questions: persistReducer(getPersistConfig('questions', ['apiState']), questionsSlice.reducer)
})

export const createStore = () => {
  return configureStore<any>({
    reducer: persistReducer(getPersistConfig('root'), createRootReducer())
  });
}

export const store = createStore();

export const persistor = persistStore(store)



