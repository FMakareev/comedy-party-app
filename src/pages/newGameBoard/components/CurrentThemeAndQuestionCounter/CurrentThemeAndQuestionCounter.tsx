import React from 'react';
import {IonGrid, IonLabel, IonRow} from "@ionic/react";
import './CurrentThemeAndQuestionCounter.css';

export const CurrentThemeAndQuestionCounter = () => {
  return (
    <IonGrid>
      <IonRow className={'ion-justify-content-between ion-padding size-text-base'}>
        <IonLabel className={'current-theme-and-question-counter_label'}>
          Стихи
        </IonLabel>
        <IonLabel className={'current-theme-and-question-counter_label'}>
          1/20
        </IonLabel>
      </IonRow>
    </IonGrid>
  )
};
