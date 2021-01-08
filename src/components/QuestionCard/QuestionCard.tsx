import React from 'react';
import './QuestionCard.css';
import {Question} from "../../types";
import {IonCard, IonCardContent, IonText} from "@ionic/react";
import {getAnswerPlaceholder} from "../../pages/blitz/blitz-round/utilities";

type Props = {
  isShowAnswer: boolean;
} & Question;

export const QuestionCard: React.FC<Props> = (
  {
    question,
    answer,
    author,
    isShowAnswer,
  }
) => {
  return(
    <IonCard className={'ion-no-margin ion-padding-vertical question-card_wrapper'}>
      <IonCardContent className={'ion-no-padding ion-padding-horizontal ion-padding-bottom ion-text-center size-text-base'}>
        <IonText className={'question-card_text'}>
          {
            question
          }
        </IonText>
        <br/>
        <IonText className={'question-card_text'}>
          {
            isShowAnswer ? answer : getAnswerPlaceholder(answer)
          }
        </IonText>
      </IonCardContent>
      {
        author && (
          <IonCardContent className={'ion-no-padding ion-padding-horizontal ion-text-right size-text-base'}>
            <IonText className={'question-card_text'}>
              {
                author
              }
            </IonText>
          </IonCardContent>
        )
      }
    </IonCard>
  )
};
