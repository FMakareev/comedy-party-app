import {createAsyncThunk} from "@reduxjs/toolkit";
import { TASKS_REDUCER_NAME } from "./const";
import { tasksApi } from "../../api/tasksApi";

export const fetchTaskListAction = createAsyncThunk(
  TASKS_REDUCER_NAME,
  async () => {
    return await tasksApi.getList();
  }
)
