import {nanoid} from '@reduxjs/toolkit'

import {Player} from "../types";

const faker = require('faker');

export const getRandomPlayer = (): Player => ({
  id: nanoid(),
  name: faker.internet.userName(),
  color: faker.commerce.color(),
})
