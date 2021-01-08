import {configureStore} from "@reduxjs/toolkit";
import {gameStateSelectors} from "../selectors";
import {gameState} from "../reducer";
import {getRandomPlayer} from "../../../mocks/getRandomPlayer";

const createMockStore = () => {
  return configureStore({
    reducer: {
      gameState: gameState.reducer
    }
  })
}

describe('gameState', () => {

  it('addPlayers', () => {
    const players: any[] = [
      getRandomPlayer(),
      getRandomPlayer(),
      getRandomPlayer(),
    ];
    const store = createMockStore();

    expect(gameStateSelectors.getGamePlayers(store.getState() as any)).toEqual([]);
    store.dispatch(gameState.actions.addPlayers({
      players
    }) as any)
    expect(gameStateSelectors.getGamePlayers(store.getState() as any)).toEqual(players);
  })

  it('nextAttempts', () => {
    const store = createMockStore();

    expect(gameStateSelectors.getPlayerAttempts(store.getState() as any)).toEqual(3);

    store.dispatch(gameState.actions.nextAttempts({}) as any)
    expect(gameStateSelectors.getPlayerAttempts(store.getState() as any)).toEqual(2);

    store.dispatch(gameState.actions.nextAttempts({}) as any)
    expect(gameStateSelectors.getPlayerAttempts(store.getState() as any)).toEqual(1);

    store.dispatch(gameState.actions.nextAttempts({}) as any)
    expect(gameStateSelectors.getPlayerAttempts(store.getState() as any)).toEqual(3);
  })

  it('createNewGame', () => {
    const store = createMockStore();
    expect(gameStateSelectors.getGameId(store.getState() as any)).toEqual(null);
    store.dispatch(gameState.actions.createNewGame({}) as any)

    expect(gameStateSelectors.getGameId(store.getState() as any)).toEqual(expect.any(String));
  })

  it('addGameQuestions', () => {
    const store = createMockStore();

    store.dispatch(gameState.actions.addGameQuestions({
      gameQuestions: [1,2,3,4,5]
    }) as any)

    expect(gameStateSelectors.getGameQuestions(store.getState() as any)).toEqual([1,2,3,4,5]);
    expect(gameStateSelectors.getCurrentQuestion(store.getState() as any)).toEqual(1);
  })

  it('nextQuestion', () => {
    const store = createMockStore();
    const gameQuestions = [1,2,3,4,5];
    store.dispatch(gameState.actions.addGameQuestions({
      gameQuestions: gameQuestions
    }) as any)

    gameQuestions.forEach((question) => {
      expect(gameStateSelectors.getCurrentQuestion(store.getState() as any)).toEqual(question);
      store.dispatch(gameState.actions.nextQuestion({}) as any);
    })

    store.dispatch(gameState.actions.nextQuestion({}) as any);
  })

  it('nextPlayer', () => {
    const players: any[] = [
      getRandomPlayer(),
      getRandomPlayer(),
      getRandomPlayer(),
    ];
    const store = createMockStore();
    store.dispatch(gameState.actions.addPlayers({
      players
    }) as any)

    expect(gameStateSelectors.getGameCurrentPlayer(store.getState() as any)).toEqual(players[0]);
    expect(gameStateSelectors.getGameCurrentPlayerIndex(store.getState() as any)).toEqual(0);

    store.dispatch(gameState.actions.nextPlayer({}) as any)
    expect(gameStateSelectors.getGameCurrentPlayer(store.getState() as any)).toEqual(players[1]);
    expect(gameStateSelectors.getGameCurrentPlayerIndex(store.getState() as any)).toEqual(1);

    store.dispatch(gameState.actions.nextPlayer({}) as any)
    expect(gameStateSelectors.getGameCurrentPlayer(store.getState() as any)).toEqual(players[2]);
    expect(gameStateSelectors.getGameCurrentPlayerIndex(store.getState() as any)).toEqual(2);

    store.dispatch(gameState.actions.nextPlayer({}) as any)
    expect(gameStateSelectors.getGameCurrentPlayer(store.getState() as any)).toEqual(players[0]);
    expect(gameStateSelectors.getGameCurrentPlayerIndex(store.getState() as any)).toEqual(0);

  })

})
