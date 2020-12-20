import React from 'react';
import {IonCol, IonRow} from "@ionic/react";
import {GameBoardPlayerSettingsForm} from "./GameBoardPlayerSettingsForm/GameBoardPlayerSettingsForm";
import {StartNewGameButton} from '../StartNewGameButton';


export const GameBoardSettingsView = () => {
  return (
    <>
      <IonRow>
        <IonCol>
          <GameBoardPlayerSettingsForm/>
        </IonCol>
      </IonRow>

      <IonRow>
        <StartNewGameButton/>
      </IonRow>
    </>
  );
};
