import {IonButton, IonGrid, IonRow, IonCol, IonRouterLink} from '@ionic/react';
import React from 'react';
import './Home.css';

export const Home: React.FC = () => {
  return (
    <IonGrid className={""}>
      <IonRow className="ion-align-items-center">
        <IonCol className="ion-align-self-center">
          <IonRouterLink routerLink="/game-board">
            <IonButton>
              Start
            </IonButton>
          </IonRouterLink>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
