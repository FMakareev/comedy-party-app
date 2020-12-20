import mockData from '../mocks/mock-data.json';
import {Task} from "../types";

export const tasksApi = {
  getList: async (): Promise<Task[]> => {
    return Promise.resolve(mockData.map((item: any): Task => ({
      ...item,
      id: Date.now().toString()
    })))
  },
}
