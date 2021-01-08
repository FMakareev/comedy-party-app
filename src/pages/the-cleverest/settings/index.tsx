import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from "react-router";
import {playersStateSelectors} from '../../../store/players/selectors';
import {Player} from "../../../types";
import {PlayersStateActions} from "../../../store/players/reducer";
import {GameConfig, GameStateActions} from "../../../store/game-state/reducer";
import {FormSettings} from "../../../components/FormSettings/FormSettings";

type FormValues = {
  players: Player[];
  gameConfig: GameConfig;
}


export const SettingsPage = () => {
  const {push} = useHistory();
  const dispatch = useDispatch();
  const players: Player[] = useSelector(playersStateSelectors.getPlayers);

  return <FormSettings
    initialValues={{
      players,
      gameConfig: {
        playerAttempts: 1,
        questionCountInRound: 10,
        roundsCount: 1,
        isStartWithLowPoints: false
      }
    }}
    onSubmit={(values: FormValues) => {
      if (Array.isArray(values.players)) {
        dispatch(PlayersStateActions.addPlayers(values.players))
        dispatch(GameStateActions.createNewGame());
        dispatch(GameStateActions.setNewGameConfig(values.gameConfig));

        dispatch(GameStateActions.addPlayers(values.players))
        push('/game/cleverest/category-selection');
      }
    }}
    onClickBack={() =>  push('/')}
  />
};
