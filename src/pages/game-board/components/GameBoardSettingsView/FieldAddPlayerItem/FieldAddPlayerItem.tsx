//FieldAddPlayerItem

import React from "react";
import {IonButton, IonInput, IonItem} from "@ionic/react";
const faker = require('faker');

/** @deprecated */
export const FieldAddPlayerItem = ({onSave}: any) => {
  const [state, setState] = React.useState<any>('');
  return <IonItem>
    <IonInput
      value={state}
      placeholder="Введите имя игрока"
      onIonChange={(e) => setState(e?.detail?.value)}
    />
    <IonButton
      onClick={() => {
        console.log(state);
        onSave({
          name: state,
          score: 0,
          color: faker.commerce.color(),
        });
        setState('');
      }}
    >
      +
    </IonButton>
  </IonItem>
}
