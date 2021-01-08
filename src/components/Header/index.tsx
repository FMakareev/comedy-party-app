import React from 'react';
import {IonHeader, IonToolbar, IonButtons, IonTitle} from "@ionic/react";
// @ts-ignore
import IosArrowBack from 'react-ionicons/lib/IosArrowBack'
import './header.css';

type Props = {
  onClickBack: () => void;
  title: any;
}

export const Header: React.FC<Props> = ({onClickBack, title}) => {
  return (<IonHeader mode={'ios'}>

    <IonToolbar color={'transparent'} className={'toolbar_wrapper'}>

      <IonButtons slot={'start'}>
        <IosArrowBack color={'#ffffff'} onClick={onClickBack}/>
      </IonButtons>
      <IonTitle className={'toolbar_title'} color={'light'}>
        {title}
      </IonTitle>
    </IonToolbar>
  </IonHeader>)
};
