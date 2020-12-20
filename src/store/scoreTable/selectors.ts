import { createSelector } from '@reduxjs/toolkit'
import { SCORE_TABLE_REDUCER_NAME } from './const';

const getCurrentGameState = (state: any) => state[SCORE_TABLE_REDUCER_NAME];


export const scoreTableStateSelectors = {
}
