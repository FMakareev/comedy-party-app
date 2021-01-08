import {playersStateSelectors} from "../selectors";
import {range} from 'lodash';
import {getRandomPlayer} from "../../../mocks/getRandomPlayer";
import {PlayersStateActions, playersState} from "../reducer";
import {configureStore, EnhancedStore} from "@reduxjs/toolkit";


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

  it('должен получить список игроков из хранилища', () => {
    fakePlayers.forEach((item) => STORE.dispatch(PlayersStateActions.addPlayer(item)));

    expect(playersStateSelectors.getPlayers(STORE.getState())).toEqual(fakePlayers);
  });

  it('должен добавить нового игрока в хранилище', () => {

    expect(playersStateSelectors.getPlayers(STORE.getState())).toEqual([])

    STORE.dispatch(PlayersStateActions.addPlayer(fakePlayers[0]))

    expect(playersStateSelectors.getPlayers(STORE.getState())).toEqual([fakePlayers[0]])

  })

  it('должен добавить обновить игрока в хранилище', () => {

    STORE.dispatch(PlayersStateActions.addPlayer({
      name: 'name',
      id: '123',
      color: '',
    }))
    expect(playersStateSelectors.getPlayers(STORE.getState())).toEqual([{
      name: 'name',
      id: '123',
      color: '',
    }])

    STORE.dispatch(PlayersStateActions.addPlayer({
      name: 'name 2',
      id: '123',
      color: '',
    }))

    expect(playersStateSelectors.getPlayers(STORE.getState())).toHaveLength(1);
    expect(playersStateSelectors.getPlayers(STORE.getState())).toEqual([{
      name: 'name 2',
      id: '123',
      color: '',
    }])

  })

  it('должен удалить игрока из хранилище', () => {

    fakePlayers.forEach((item) => STORE.dispatch(PlayersStateActions.addPlayer(item)));

    STORE.dispatch(PlayersStateActions.removePlayer(fakePlayers[0]))

    expect(playersStateSelectors.getPlayers(STORE.getState())).toEqual([
      fakePlayers[1],
      fakePlayers[2],
    ])
  })

  it('игрока должен быть изменен в хранилище', () => {
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


  it('Должен выдать ошибку', () => {
    fakePlayers.forEach((item) => STORE.dispatch(PlayersStateActions.addPlayer(item)));

    const changedPlayer = {
      ...fakePlayers[0],
      id: 'new id'
    };

    try {
      STORE.dispatch(PlayersStateActions.changePlayer(changedPlayer));
    } catch (e) {
      expect(e.message).toEqual(`Player with id "${changedPlayer.id}" not found`);
    }

  });

})
