import React, {useEffect, useState} from 'react';
import {IonButton, IonText} from '@ionic/react';
import { Task } from '../../../../types';

type Props = {
  task?: Task;
};

export const GameTaskView = ({task}: Props) => {
  const [isShowAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    console.log('setShowAnswer');
    setShowAnswer(false);
  },[task])

  return (
    <div>

      <IonText>
        {task?.question} <br/>
        <IonText>
        {isShowAnswer && task?.answer}
        </IonText>
      </IonText>
      <br/>
      <IonButton onClick={() => {
        setShowAnswer(true);
      }}>
        Показать ответ
      </IonButton>
    </div>
  );
};
