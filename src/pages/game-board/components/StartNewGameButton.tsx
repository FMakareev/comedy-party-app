import React from 'react';
import {IonButton} from "@ionic/react";
import {TasksStateConnect, TasksStateConnectProps} from "../enhancers/taskStateConnect";
import {PlayersStateConnect, PlayersStateConnectProps} from "../enhancers/playersStateConnect";
import {CurrentGameStateConnect, CurrentGameStateConnectProps} from "../enhancers/currentGameStateConnect";

type Props = CurrentGameStateConnectProps & TasksStateConnectProps & PlayersStateConnectProps;


const StartNewGameButtonRender = (props: Props) => {
  const startGame = (): any => {
    props.createNewGame({
      players: props.players,
      gameTasks: [...props.tasks].sort(() => Math.random() - 0.5).slice(0, props.tasks.length - 1),
    });
  };
  return (
    <IonButton onClick={startGame}>
      Start
    </IonButton>
  );
};

export const StartNewGameButton = TasksStateConnect(
  PlayersStateConnect(
    CurrentGameStateConnect(StartNewGameButtonRender)
  )
);
