import {FormApi, SubmissionErrors} from "final-form";

export enum QuestionTag {
  QUOTE = 'QUOTE',
  FACT = 'FACT',
  POEM = 'POEM',
  LAW = 'LAW'
}

/** @deprecated */
export type Task = {
  id?: string;
  tag: QuestionTag;
  question: string;
  answer: string;
}

export type Question = {
  id?: string;
  category: QuestionTag;
  question: string;
  answer: string;
  author: string;
  cleverest?: string;
}


export enum ApiStateEnum {
  FULFILLED,
  PENDING,
  REJECTED,
}

export type Player = {
  id: string;
  name: string;
  avatar: number;
}

export type PlayerScore = {
  player: Player;
  score: number;
}

export type GameScore = {
  id: string;
  players: PlayerScore[];
}

export type AnyProps = {
  [k: string]: any;
}

export type Maybe<T> = T | null | undefined;

export type FinalOnSubmit<FormValues, InitialFormValues> = (
  values: FormValues,
  form: FormApi<FormValues, InitialFormValues>,
  callback?: (errors?: SubmissionErrors) => void
) => SubmissionErrors
  | Promise<SubmissionErrors | undefined>
  | undefined
  | void
