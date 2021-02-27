import {createSlice, nanoid, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit'
import {GAME_STATE_REDUCER_NAME} from "./const";
import {Player, Question, QuestionTag} from '../../types';


export type GameConfig = {
  /** кол-во попыток игрока */
  playerAttempts: number;
  /** кол-во вопросов в раунде */
  questionCountInRound: number;
  /** кол-во раундов */
  roundsCount: number;
  /** игрок с наименьшим кол-вом очков начинает новый раунд */
  isStartWithLowPoints: boolean;
}

export type State = {
  gameConfig: GameConfig;
  gameId: string | null;
  players: Player[];

  currentPlayer: number;
  currentQuestion: number;
  currentRound: number;

  playerAttempts: number;
  themeHistory: QuestionTag[];
  gameQuestions: Question[];

  showAnswer: boolean;
}

export const gameStateInitialState = {
  gameConfig: {
    playerAttempts: 3,
    roundsCount: 2,
    questionCountInRound: 2,
    isStartWithLowPoints: true,
  },
  gameId: null,
  players: [],
  currentPlayer: 0,
  playerAttempts: 3,

  currentQuestion: 0,
  currentRound: 0,

  themeHistory: [],
  gameQuestions: [],

  showAnswer: false,
}

export type GameStateActions = {
  createNewGame: () => void;
  addPlayers: (players: Player[]) => void;
  setNewGameConfig: (config: GameConfig) => void;
  addGameQuestions: (gameQuestions: Question[]) => void;
  changeTheme: (newTheme: QuestionTag) => void;
  changeCurrentPlayer: (playerIndex: number) => void;
  nextQuestion: () => void;
  nextRound: () => void;
  nextAttempts: () => void;
  resetAttempts: () => void;
  resetCurrentQuestion: () => void;
  nextPlayer: () => void;
  changeShowAnswer: (isShow: boolean) => void;
}

export const gameState = createSlice<State, SliceCaseReducers<State>, string>({
  name: GAME_STATE_REDUCER_NAME,
  initialState: gameStateInitialState,
  reducers: {
    createNewGame: (state: State) => {
      state.gameId = nanoid();
      state.players = gameStateInitialState.players;
      state.currentPlayer = gameStateInitialState.currentPlayer;
      state.playerAttempts = gameStateInitialState.playerAttempts;
      state.currentQuestion = gameStateInitialState.currentQuestion;
      state.currentRound = gameStateInitialState.currentRound;
      state.themeHistory = gameStateInitialState.themeHistory;
      state.gameQuestions = gameStateInitialState.gameQuestions;
      state.showAnswer = gameStateInitialState.showAnswer;
    },

    setNewGameConfig: (state: State, {payload}: PayloadAction<GameConfig> )=> {
      state.gameConfig = payload;
    },

    changeTheme: (state: State,  {payload}: PayloadAction<QuestionTag>) => {
      state.themeHistory.push(payload);
    },

    addPlayers: (state: State, {payload}: PayloadAction<Player[]>) => {
      state.players = payload;
    },

    addGameQuestions: (state: State, {payload}: PayloadAction<Question[]>) => {
      state.gameQuestions = payload;
      state.currentQuestion = 0;
    },

    changeShowAnswer: (state: State, {payload}: PayloadAction<boolean>) => {
      state.showAnswer = payload;
    },

    nextQuestion: (state: State) => {
      if (state.currentQuestion < state.gameQuestions.length - 1) {
        state.currentQuestion += 1;
      }
    },

    nextRound: (state: State) => {
      state.currentRound += 1;
    },

    nextAttempts: (state: State) => {
      if (state.playerAttempts <= 1) {
        state.playerAttempts = state.gameConfig.playerAttempts;
      } else {
        state.playerAttempts -= 1;
      }
    },

    resetAttempts: (state: State) => {
      state.playerAttempts = state.gameConfig.playerAttempts;
    },

    resetCurrentQuestion: (state: State) => {
      state.currentQuestion = 0;
    },

    changeCurrentPlayer: (state: State, {payload}: PayloadAction<number>) => {
      state.currentPlayer = payload;
    },

    nextPlayer: (state: State) => {
      const length = state.players.length;
      if (state.currentPlayer < length - 1) {
        state.currentPlayer += 1;
      } else {
        state.currentPlayer = 0;
      }
    },
  },
  extraReducers: {}
})

export const GameStateActions: GameStateActions = gameState.actions as unknown as GameStateActions;
