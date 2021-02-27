import {configureStore, EnhancedStore} from "@reduxjs/toolkit";
import {range} from 'lodash';
import {playersStateSelectors} from "../selectors";
import {getRandomPlayer} from "../../../mocks/getRandomPlayer";
import {PlayersStateActions, playersState} from "../reducer";


const fakePlayers = range(0, 3).map(getRandomPlayer);

const createMockStore = () => {
  return configureStore({
    reducer: {
      players: playersState.reducer
    }
  })
}


describe('players', () => {
  let STORE: EnhancedStore;

  beforeEach(() => {
    STORE = createMockStore();
  })

  it('should get the list of players from the storage', () => {
    fakePlayers.forEach((item) => STORE.dispatch(PlayersStateActions.addPlayer(item)));

    expect(playersStateSelectors.getPlayers(STORE.getState())).toEqual(fakePlayers);
  });

  it('must add a new player to storage', () => {

    expect(playersStateSelectors.getPlayers(STORE.getState())).toEqual([])

    STORE.dispatch(PlayersStateActions.addPlayer(fakePlayers[0]))

    expect(playersStateSelectors.getPlayers(STORE.getState())).toEqual([fakePlayers[0]])

  })

  it('must add update player to storage', () => {

    STORE.dispatch(PlayersStateActions.addPlayer({
      name: 'name',
      id: '123',
      avatar: 0,
    }))
    expect(playersStateSelectors.getPlayers(STORE.getState())).toEqual([{
      name: 'name',
      id: '123',
      avatar: 0,
    }])

    STORE.dispatch(PlayersStateActions.addPlayer({
      name: 'name 2',
      id: '123',
      avatar: 0,
    }))

    expect(playersStateSelectors.getPlayers(STORE.getState())).toHaveLength(1);
    expect(playersStateSelectors.getPlayers(STORE.getState())).toEqual([{
      name: 'name 2',
      id: '123',
      avatar: 0,
    }])

  })

  it('must remove the player from storage', () => {

    fakePlayers.forEach((item) => STORE.dispatch(PlayersStateActions.addPlayer(item)));

    STORE.dispatch(PlayersStateActions.removePlayer(fakePlayers[0]))

    expect(playersStateSelectors.getPlayers(STORE.getState())).toEqual([
      fakePlayers[1],
      fakePlayers[2],
    ])
  })

  it('the player must be changed in the repository', () => {
    fakePlayers.forEach((item) => STORE.dispatch(PlayersStateActions.addPlayer(item)));

    const changedPlayer = {
      ...fakePlayers[0],
      name: 'new name'
    };

    STORE.dispatch(PlayersStateActions.changePlayer(changedPlayer));
    expect(playersStateSelectors.getPlayers(STORE.getState())).toEqual([
      changedPlayer,
      fakePlayers[1],
      fakePlayers[2],
    ]);
  })


  it('Should not change the list of players', () => {
    const consoleError = console.error;
    console.error = jest.fn();
    fakePlayers.forEach((item) => STORE.dispatch(PlayersStateActions.addPlayer(item)));

    const changedPlayer = {
      ...fakePlayers[0],
      id: 'new id'
    };

    STORE.dispatch(PlayersStateActions.changePlayer(changedPlayer));
    expect(console.error).toHaveBeenLastCalledWith(`Player with id "${changedPlayer.id}" not found`);

    console.error = consoleError;
  });

})
