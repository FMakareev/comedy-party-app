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
  gameId: string;
  players: Player[];

  currentPlayer: number;
  currentQuestion: number;
  currentRound: number;

  playerAttempts: number;
  themeHistory: QuestionTag[];
  gameQuestions: Question[];

  showAnswer: boolean;
}

const initialState = {
  gameConfig: {
    playerAttempts: 3,
    roundsCount: 2,
    questionCountInRound: 10,
    isStartWithLowPoints: true,
  },
  gameId: nanoid(),
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
  createNewGame: () => any;
  addPlayers: (players: Player[]) => any;
  setNewGameConfig: (config: GameConfig) => any;
  addGameQuestions: (gameQuestions: Question[]) => any;
  changeTheme: (newTheme: QuestionTag) => any;
  changeCurrentPlayer: (playerIndex: number) => any;
  nextQuestion: () => any;
  nextRound: () => any;
  nextAttempts: () => any;
  resetAttempts: () => any;
  nextPlayer: () => any;
  changeShowAnswer: (isShow: boolean) => any;
}

export const gameState = createSlice<State, SliceCaseReducers<State>, string>({
  name: GAME_STATE_REDUCER_NAME,
  initialState: initialState,
  reducers: {
    createNewGame: (state: State) => {
      state.gameId = nanoid();
      state.players = initialState.players;
      state.currentPlayer = initialState.currentPlayer;
      state.playerAttempts = initialState.playerAttempts;
      state.currentQuestion = initialState.currentQuestion;
      state.currentRound = initialState.currentRound;
      state.themeHistory = initialState.themeHistory;
      state.gameQuestions = initialState.gameQuestions;
      state.showAnswer = initialState.showAnswer;
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
