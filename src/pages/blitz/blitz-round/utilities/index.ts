import {Question, QuestionTag} from "../../../../types";
import {slice} from 'lodash';
import random from 'lodash/random';

const notIncludes = (targetArray: any[]) => (item: any) => !targetArray.includes(item)

const getRandFromArray = (targetArray: any[]) => {
  if (targetArray.length === 0) {
    return null;
  }
  return targetArray[random(0, targetArray.length - 1)];
}

export const getRandomQuestionsTheme = (themes: any[], excludeTheme: QuestionTag[]): any => {
  return getRandFromArray(themes.filter(notIncludes(excludeTheme)));
}


const comparatorQuestionByTheme = (category: QuestionTag) => (item: Question) => item.category.toLowerCase() === category.toLowerCase();

export const filterQuestionsByTheme = (theme: QuestionTag) => (questions: Question[]): Question[] => questions.filter(comparatorQuestionByTheme(theme))

export const questionsSlice = (start: number, end: number) => (questions: Question[]) => slice(questions, start, end);


export const getAnswerPlaceholder = (answer: string) => answer && answer.split('').reduce((accum: string[], item: string)=>{
  if (item === ' ') {
    accum.push(' ')
  } else {
    accum.push('_')
  }
  return accum;
},[]).join('')
