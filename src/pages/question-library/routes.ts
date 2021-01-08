import {QuestionLibraryCategoryPage} from "./question-library-category";
import {QuestionLibraryQuestionsPage} from "./question-library-questions";


export const routes = [
  {
    path: '/question-library',
    exact: true,
    component: QuestionLibraryCategoryPage,
  },
  {
    path: '/question-library/:tag',
    exact: false,
    component: QuestionLibraryQuestionsPage,
  },
]
