import React from 'react';
import {IonGrid, IonHeader, IonImg, IonLabel, IonRow} from "@ionic/react";
import icon from "../../../../assets/icons/1F60B.svg";
import './GameBoardHeader.css';

export const GameBoardHeader = () => {
  return (<IonHeader mode={'ios'}>
    <IonGrid>
      <IonRow className={'ion-padding ion-align-items-center'}>
        <IonImg className={'game-board-header_icon'} src={icon}/>
        <IonLabel className={'game-board-header_label'}>
          Followers
        </IonLabel>
      </IonRow>
    </IonGrid>
  </IonHeader>)
};
