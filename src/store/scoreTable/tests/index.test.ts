import {configureStore} from "@reduxjs/toolkit";
import { scoreTableState, ScoreTableStateActions } from "../reducer";
import { Player } from "../../../types";

const createMockStore = () => {
  return configureStore({
    reducer: {
      scoreTable: scoreTableState.reducer
    }
  })
}

describe('scoreTableState', () => {
  it('must update the players score for the specified game', () => {
    const store: any = createMockStore();
    const gameID = '123';
    const gameIDTwo = '321';
    const playerOne: Player = {
      id: '1',
      name: 'player 1',
      avatar: 0,
    };
    const playerTwo: Player = {
      id: '2',
      name: 'player 2',
      avatar: 0,
    };


    //<editor-fold desc="Update playerOne score">
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
    //</editor-fold>

    //<editor-fold desc="Update playerTwo score">
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
    //</editor-fold>

  })


})
