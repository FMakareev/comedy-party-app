import {IonButton, IonGrid, IonRow, IonCol, IonRouterLink, IonImg} from '@ionic/react';
import React from 'react';
import './Home.css';
import logo from '../../assets/logo.svg';

const menu: any[] = [
  {
    routerLink: '/game/blitz/settings',
    label: 'Блиц',
  },
  {
    routerLink: '/game/cleverest/settings',
    label: 'Самый умный',
  },
  {
    routerLink: '/question-library',
    label: 'Каталог',
  },
]

export const Home: React.FC = () => {
  return (
    <IonGrid className={""}>
      <IonRow className="ion-align-items-center ion-justify-content-center">
        <IonCol size={'9'} className="ion-align-self-center">
          <br/>
          <br/>
          <br/>
          <br/>
        </IonCol>
        <IonCol size={'9'} className="ion-align-self-center">
          <IonImg src={logo}/>
        </IonCol>
        <IonCol size={'9'} className="ion-align-self-center">
          <br/>
          <br/>
        </IonCol>
        {
          menu.map((item, index: number) => (<IonCol
            key={index}
            size={'12'}
            className="ion-align-self-center"
          >
            <IonRouterLink routerLink={item.routerLink}>
              <IonButton className={'btn-full'}>
                {item.label}
              </IonButton>
            </IonRouterLink>
          </IonCol>))
        }

      </IonRow>
    </IonGrid>
  );
};
