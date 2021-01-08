import React from 'react';
import {IonGrid, IonLabel, IonRow} from "@ionic/react";
import './CurrentThemeAndQuestionCounter.css';
import {QuestionTag, Maybe} from "../../types";

type Props = {
  currentTheme: Maybe<QuestionTag>;
  getCurrentQuestionIndex: number;
  gameQuestionsLength: number;
}

export const CurrentThemeAndQuestionCounter: React.FC<Props> = (
  {
    currentTheme,
    getCurrentQuestionIndex,
    gameQuestionsLength
  }
) => {
  return (
    <IonGrid>
      <IonRow className={'ion-justify-content-between ion-padding size-text-base'}>
        <IonLabel className={'current-theme-and-question-counter_label'}>
          {currentTheme}
        </IonLabel>
        <IonLabel className={'current-theme-and-question-counter_label'}>
          {getCurrentQuestionIndex + 1}/{gameQuestionsLength}
        </IonLabel>
      </IonRow>
    </IonGrid>
  )
};
