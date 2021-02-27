import React from 'react';
import {IonFabButton, IonImg} from "@ionic/react";
import icon from "../../assets/icons/1F60B.svg";

type Props = {
  isShowAnswer: boolean;
  showAnswer(isShow: boolean): () =>undefined;
  next(): undefined;
}

export const NextQuestionButton: React.FC<Props> = ({isShowAnswer, showAnswer, next}) => {
  return (
    <>
      {
        !isShowAnswer &&
				<IonFabButton
					className={'ion-no-margin'}
					onClick={showAnswer(true)}
					size={'small'}
				>
					<IonImg style={{width: '32px'}} src={icon}/>
				</IonFabButton>
      }
      {
        isShowAnswer &&
				<IonFabButton
					className={'ion-no-margin'}
					onClick={next}
					size={'small'}
				>
					->
				</IonFabButton>
      }
    </>
  );
};
