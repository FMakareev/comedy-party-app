import React from 'react';
import {IonAlert} from "@ionic/react";

type Props = {
  isOpen: boolean;
  onDidDismiss: () => any;
  onOk: () => any;
}

export const EndGameAlert: React.FC<Props> = ({isOpen, onDidDismiss,onOk}) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onDidDismiss}
      cssClass='my-custom-class'
      header={'Закончить игру?'}
      // message={'Хотите закончить игру и посмотреть результат?'}
      message={'Хотите закончить игру?'}
      buttons={[
        {
          text: 'Нет',
        },
        {
          text: 'Да',
          handler: onOk
        }
      ]}
    />
  );
};
