import {createSelector,} from '@reduxjs/toolkit'
import {QUESTIONS_REDUCER_NAME} from "./const";
import {State} from "./reducer";
import {ApiStateEnum, QuestionTag} from "../../types";
import {Store} from "../store";
import { questionCompareByTag } from '../../utilities';

const getQuestionsState = (state: Store) => state[QUESTIONS_REDUCER_NAME];

const getQuestions = createSelector(getQuestionsState, (state: State) => state.questions);
const getQuestionsByTag = (tag: QuestionTag) => createSelector(getQuestionsState, (state: State) => state.questions.filter(questionCompareByTag(tag)));

const getApiState = createSelector(getQuestionsState, (state: State): ApiStateEnum => state.apiState);

export const questionsStateSelectors = {
  getApiState,
  getQuestions,
  getQuestionsByTag,
}


// @ts-ignore
window.questionsStateSelectors = questionsStateSelectors;
