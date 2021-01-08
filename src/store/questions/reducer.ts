import {createSlice, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit'
import {ApiStateEnum, Question} from '../../types';
import { QUESTIONS_REDUCER_NAME } from './const';
import { fetchQuestionListAction } from './actions';

export type State = {
  questions: Question[];
  apiState: ApiStateEnum
};
export type QuestionsActions = {
  fetchQuestionList: () => any;
};

/** @desc задачи доступные для игры */
export const questionsSlice = createSlice<State, SliceCaseReducers<State>, string>({
  name: QUESTIONS_REDUCER_NAME,
  initialState: {
    questions: [],
    apiState: ApiStateEnum.PENDING,
  },
  reducers: {

  },
  extraReducers: {
    [fetchQuestionListAction.fulfilled.toString()]: (state: State, {payload}: PayloadAction<Question[]>) => {
      state.apiState = ApiStateEnum.FULFILLED;
      state.questions = payload;
    },
    [fetchQuestionListAction.pending.toString()]: (state: State) => {
      state.apiState = ApiStateEnum.PENDING;
      state.questions = [];
    },
    [fetchQuestionListAction.rejected.toString()]: (state: State) => {
      state.apiState = ApiStateEnum.REJECTED;
      state.questions = [];
    },
  }
});


export const QuestionsActions: QuestionsActions = questionsSlice.actions as unknown as QuestionsActions;
