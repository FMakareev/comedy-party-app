import {Player, PlayerScore, Question, QuestionTag} from "../types";


export const questionCompareByTag = (category: QuestionTag) => (question: Question) => question.category === category;

export const playerCompareById = (playerId: string) => (player: Player) => playerId === player.id;

export const playerScoreCompareByPlayerId = (playerId: string) =>  ({player}: PlayerScore) => playerCompareById(playerId)(player)

export const playerScoreCompareByScore = (prev: PlayerScore, next: PlayerScore): number => {
  if (prev.score === next.score) {
    return 0;
  }
  return prev.score > next.score ? 1 : -1;
}

export const randomSort = () => Math.random() - 0.5;

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
