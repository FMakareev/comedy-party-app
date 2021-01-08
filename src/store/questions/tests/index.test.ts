import {getRandomQuestion} from "../../../mocks/getRandomQuestion";
import { QUESTIONS_REDUCER_NAME } from "../const";
import { range } from "lodash";
import { Question, QuestionTag } from "../../../types";
import { questionsStateSelectors } from "../selectors";

describe('game-state', () => {

  it('должен получить список игр вопросов по тегу не более 5', () => {

    const random = Math.random;
    Math.random = () => 0.5;

    const questions = range(0, 20).map(getRandomQuestion);
    const store = {
      [QUESTIONS_REDUCER_NAME]: {
        questions: questions,
      }
    }
    const options: any = {
      gameId: '123',
      tag: QuestionTag.FACT,
      count: 5,
    }

    const questionsResult = [...questions]
      .filter((question: Question) => question.tag === options.tag)
      .slice(0, options.count)
      .sort(() => Math.random() - 0.5);

    expect(questionsStateSelectors.getQuestionsForGame({
      ...store,
      options
    }))
      .toEqual(
        questionsResult
      )
    expect(questionsStateSelectors.getQuestionsForGame({
      ...store,
      options
    }))
      .toEqual(
        questionsResult
      )

    Math.random = random;
  })

})
