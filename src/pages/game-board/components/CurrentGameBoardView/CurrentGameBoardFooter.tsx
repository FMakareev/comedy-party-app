import React, {useState} from 'react';
import {IonButton} from '@ionic/react';
import {Actions} from "../../../../store/game-state/reducer";

type Props = Actions;

export const CurrentGameBoardFooter = (props: Props) => {
  const [isFunny, setIsFunny] = useState<boolean | null>(false);
  const [isRight, setIsRight] = useState<boolean | null>(false);

  const resetState = () => {
    setIsFunny(false);
    setIsRight(false);
  }
  const toggle = (value: any, setter: any) => () => setter(!isFunny);

  const toggleIsFunny = toggle(isFunny, setIsFunny);
  const toggleIsRight = toggle(isRight, setIsRight);

  const nextTask = () => {
    let score = 0;
    if (isRight) {
      score += 2;
    } else if (isFunny) {
      score += 1;
    }
    resetState();
    props.nextTask();
    props.nextPlayer({score});
  }

  return (
    <div>
      <IonButton color={isFunny ? 'success' : 'primary'} onClick={toggleIsFunny}>
        Смешно
      </IonButton>
      <IonButton color={isRight ? 'success' : 'primary'} onClick={toggleIsRight}>
        Правильно
      </IonButton>
      <br/>
      <IonButton onClick={nextTask}>
        Следующий
      </IonButton>
    </div>
  );
};
