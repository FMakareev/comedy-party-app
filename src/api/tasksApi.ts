import mockData from '../mocks/mock-data.json';
import {Question} from "../types";
import { nanoid } from '@reduxjs/toolkit';

export const tasksApi = {
  getList: async (): Promise<Question[]> => {
    return Promise.resolve(mockData.map((item: any): Question => ({
      ...item,
      id: nanoid(),
    })))
  },
}
