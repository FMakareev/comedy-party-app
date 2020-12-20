import React from 'react';
import {IonFabButton, IonFooter, IonGrid, IonImg, IonRow} from "@ionic/react";
import icon from "../../../../assets/icons/1F60B.svg";
import cn from "classnames";

export const GameBoardFooter = () => {
  const [isShow, setShow] = React.useState(true);
  return (<IonFooter mode={'ios'}>
    <IonGrid>
      <IonRow className={'ion-justify-content-between ion-padding'}>
        <IonFabButton
          disabled={isShow}
          className={cn({
            'is-visibility-hidden': isShow
          })}
          size={'small'}
        >
          <IonImg style={{width: '32px'}} src={icon}/>
        </IonFabButton>
        <IonFabButton
          disabled={isShow}
          className={cn({
            'is-visibility-hidden': isShow
          })}
        >
          <IonImg style={{width: '40px'}} src={icon}/>
        </IonFabButton>
        <IonFabButton
          disabled={isShow}
          className={cn({
            'is-visibility-hidden': isShow
          })}
        >
          <IonImg style={{width: '40px'}} src={icon}/>
        </IonFabButton>
        <IonFabButton size={'small'}>
          <IonImg style={{width: '32px'}} src={icon}/>
        </IonFabButton>
      </IonRow>
    </IonGrid>
  </IonFooter>)
};
