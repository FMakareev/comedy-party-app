import {IonGrid} from '@ionic/react';
import React from 'react';
import {CurrentGameStateConnect, CurrentGameStateConnectProps} from './enhancers/currentGameStateConnect';
import { TasksStateConnectProps, TasksStateConnect } from './enhancers/taskStateConnect';
import { GameBoardSettingsView } from './components/GameBoardSettingsView/GameBoardSettingsView';
import { CurrentGameBoardView } from './components/CurrentGameBoardView/CurrentGameBoardView';
import { EndGameBoardView } from './components/EndGameBoardView/EndGameBoardView';

type Props = CurrentGameStateConnectProps & TasksStateConnectProps;

export const GameBoardPageRender: React.FC<Props> = (props: Props) => {

  React.useEffect(() => {
    props.fetchTaskList();
  },[]);

  return (
    <IonGrid className={""}>
      {
        !props.gameIsStart && !props.gameIsEnd && <GameBoardSettingsView/>
      }
      {
        props.gameIsStart && <CurrentGameBoardView/>
      }
      {
        props.gameIsEnd && <EndGameBoardView/>
      }
    </IonGrid>
  );
};

export const GameBoardPage = CurrentGameStateConnect(TasksStateConnect(GameBoardPageRender))
