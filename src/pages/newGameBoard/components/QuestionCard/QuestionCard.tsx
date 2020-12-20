import React from 'react';
import {IonCard, IonCardContent, IonGrid, IonText} from "@ionic/react";
import './QuestionCard.css';

export const QuestionCard = () => {
  return (
    <IonGrid className={'ion-margin'}>
      <IonCard className={'ion-no-margin ion-padding-vertical question-card_wrapper'}>
        <IonCardContent className={'ion-text-center size-text-base'}>
          <IonText className={'question-card_text'}>
            Сенюша, знаешь ли,<br/>
            покамест, как баранов,<br/>
            опять нас не<br/>
            погнали в класс,<br/>
            пойдем-ка да нарвем<br/>
            в саду себе каштанов!<br/>
            -Нет, Федя,
          </IonText>
          <br/>

          <IonText className={'question-card_text'}>
            _________________!
          </IonText>
        </IonCardContent>
          <IonCardContent className={'ion-text-right size-text-base'}>
          <IonText className={'question-card_text'}>
            Два Мальчика<br/>
            И.А. Крылов
          </IonText>
        </IonCardContent>
      </IonCard>
    </IonGrid>
  );
};
