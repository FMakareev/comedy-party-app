// getRandomQuestion
import {nanoid} from '@reduxjs/toolkit'

import {Question, QuestionTag} from "../types";

const faker = require('faker');

export const getRandomQuestion = (): Question => ({
  id: nanoid(),
  category: faker.random.arrayElement([QuestionTag.FACT, QuestionTag.QUOTE, QuestionTag.POEM, QuestionTag.LAW]),
  question: faker.lorem.words(),
  answer: faker.lorem.words(),
  author: faker.lorem.word(),
  cleverest: faker.lorem.words(),
})
