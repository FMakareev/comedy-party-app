import mockData from '../mocks/mock-data.json';
import {Question} from "../types";
import { nanoid } from '@reduxjs/toolkit';
// import {delay} from "../utilities";

export const tasksApi = {
  getList: async (): Promise<Question[]> => {
    // await delay(2000);
    return Promise.resolve(mockData.map((item: any): Question => ({
      ...item,
      id: nanoid(),
    })))
  },
}
