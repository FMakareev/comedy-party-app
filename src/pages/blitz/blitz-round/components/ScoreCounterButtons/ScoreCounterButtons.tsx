import React from 'react';
import {IonFabButton} from "@ionic/react";
import cn from "classnames";

type Props = {
  score: number;
  isShowAnswer: boolean;
  decScore():any;
  incScore():any;
}

export const ScoreCounterButtons: React.FC<Props> = (
  {
    isShowAnswer,
    decScore,
    incScore,
    score,
  }
) => {

  return (
    <>
      <IonFabButton
        disabled={!isShowAnswer}
        onClick={decScore}
        className={cn({
          'is-visibility-hidden': !isShowAnswer
        })}
      >
        -
      </IonFabButton>
      <div className={cn({
        'is-visibility-hidden': !isShowAnswer
      })}>
        {score}
      </div>
      <IonFabButton
        disabled={!isShowAnswer}
        onClick={incScore}
        className={cn({
          'is-visibility-hidden': !isShowAnswer
        })}
      >
        +
      </IonFabButton>
    </>
  );
};
