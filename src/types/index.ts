export enum TaskTag {
  QUOTE = 'QUOTE', FACT = ' FACT', POEM = 'POEM', LAW = 'LAW'
}

export type Task = {
  id?: string;
  tag: TaskTag;
  question: string;
  answer: string;
}


export enum ApiStateEnum {
  FULFILLED,
  PENDING,
  REJECTED,
}

export type Player = {
  id: string;
  name: string;
  color: string;
}

export type PlayerScore = {
  player: Player;
  score: number;
}

export type GameScore = {
  id: string;
  players: PlayerScore[];
}
