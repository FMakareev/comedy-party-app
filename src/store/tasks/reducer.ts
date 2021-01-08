import {createSlice, SliceCaseReducers} from '@reduxjs/toolkit'
import {ApiStateEnum, Task} from '../../types';
import {fetchTaskListAction} from './actions';
import { TASKS_REDUCER_NAME } from './const';



export type State = {
  tasks: Task[];
  apiState: ApiStateEnum
};
export type Actions = {
  fetchTaskList: () => any;
};

/** @desc задачи доступные для игры */
/** @deprecated */
export const tasksSlice = createSlice<State, SliceCaseReducers<State>, string>({
  name: TASKS_REDUCER_NAME,
  initialState: {
    tasks: [],
    apiState: ApiStateEnum.FULFILLED,
  },
  reducers: {},
  extraReducers: {
    [fetchTaskListAction.fulfilled.toString()]: (state, {payload}) => {
      state.apiState = ApiStateEnum.FULFILLED;
      state.tasks = payload;
    },
    [fetchTaskListAction.pending.toString()]: (state, action) => {
      state.apiState = ApiStateEnum.PENDING;
      state.tasks = [];
    },
    [fetchTaskListAction.rejected.toString()]: (state, action) => {
      state.apiState = ApiStateEnum.REJECTED;
      state.tasks = [];
    },
  }
});
