import React from 'react';
import {IonPopover, IonGrid, IonRow, IonCol} from "@ionic/react";
import './CleverestPopover.css';

type Props = any;

export const CleverestPopover: React.FC<Props> = (props) => {
  const {event, isOpen, onDidDismiss, content} = props;
  return (
    <IonPopover
      cssClass='CleverestPopover'
      event={event}
      isOpen={isOpen}
      onDidDismiss={onDidDismiss}
    >
      <IonGrid>
        <IonRow>
          <IonCol size={'12'}>
            <p>{content}</p>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonPopover>
  );
};
