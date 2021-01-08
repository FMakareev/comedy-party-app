import {configureStore} from "@reduxjs/toolkit";
import { scoreTableState, ScoreTableStateActions } from "../reducer";

const createMockStore = () => {
  return configureStore({
    reducer: {
      scoreTable: scoreTableState.reducer
    }
  })
}

describe('scoreTableState', () => {
  it('test', () => {
    const store: any = createMockStore();
    const gameID = '123';
    const gameIDTwo = '321';
    const playerOne = {
      id: '1',
      name: 'player 1',
      color: '',
    };
    const playerTwo = {
      id: '2',
      name: 'player 2',
      color: '',
    };


    store.dispatch(ScoreTableStateActions.setGameScore({
      gameId: gameID,
      player: playerOne,
      score: 5
    }))
    expect(store.getState().scoreTable.gameMap).toMatchObject({
      [gameID]: {
        id: gameID,
        players: [
          {
            score: 5,
            player: playerOne
          },
        ]
      }
    })

    store.dispatch(ScoreTableStateActions.setGameScore({
      gameId: gameID,
      player: playerOne,
      score: 5
    }))
    expect(store.getState().scoreTable.gameMap).toMatchObject({
      [gameID]: {
        id: gameID,
        players: [
          {
            score: 10,
            player: playerOne
          },
        ]
      }
    })

    store.dispatch(ScoreTableStateActions.setGameScore({
      gameId: gameIDTwo,
      player: playerTwo,
      score: 2
    }))
    expect(store.getState().scoreTable.gameMap).toMatchObject({
      [gameID]: {
        id: gameID,
        players: [
          {
            score: 10,
            player: playerOne
          },
        ]
      },
      [gameIDTwo]: {
        id: gameIDTwo,
        players: [
          {
            score: 2,
            player: playerTwo
          },
        ]
      }
    })

    store.dispatch(ScoreTableStateActions.setGameScore({
      gameId: gameIDTwo,
      player: playerTwo,
      score: 5
    }))
    expect(store.getState().scoreTable.gameMap).toMatchObject({
      [gameID]: {
        id: gameID,
        players: [
          {
            score: 10,
            player: playerOne
          },
        ]
      },
      [gameIDTwo]: {
        id: gameIDTwo,
        players: [
          {
            score: 7,
            player: playerTwo
          },
        ]
      }
    })

  })


})
