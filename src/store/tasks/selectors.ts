import {TASKS_REDUCER_NAME} from './const';
import { createSelector } from '@reduxjs/toolkit'

const getTasksState = (state: any) => state[TASKS_REDUCER_NAME];

const getTasks = createSelector(getTasksState, (state) => state.tasks)
const getApiState = createSelector(getTasksState, (state) => state.apiState)

export const tasksStateSelectors = {
  getApiState,
  getTasks,
}
