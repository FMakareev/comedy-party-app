import React from 'react';
import {IonFooter, IonToolbar} from "@ionic/react";

type Props = {
  children: any;
}

export const Footer = ({children}: Props) => {
  return (
    <IonFooter mode={'ios'}>
      <IonToolbar color={'transparent'} className={'toolbar_wrapper'}>
        {children}
      </IonToolbar>
    </IonFooter>
  );
};
