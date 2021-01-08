import {createAsyncThunk} from "@reduxjs/toolkit";
import { tasksApi } from "../../api/tasksApi";
import { QUESTIONS_REDUCER_NAME } from "./const";

export const fetchQuestionListAction = createAsyncThunk(
  QUESTIONS_REDUCER_NAME,
  async () => {
    return await tasksApi.getList();
  }
)
