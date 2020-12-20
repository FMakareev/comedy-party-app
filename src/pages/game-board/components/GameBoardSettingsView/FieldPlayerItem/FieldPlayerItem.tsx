import React from "react";
import {IonButton, IonInput, IonItem} from "@ionic/react";
import {Player} from "../../../../../types";





export const FieldPlayerItem = ({onIonChange,onRemove, name, ...rest}: Player & { onIonChange: any; onRemove: any }) => {
  return <IonItem>
    <IonInput
      value={name}
      placeholder="Enter Input"
      onIonChange={(e) => {
        onIonChange({...rest, name: e?.detail?.value})
      }}
    />
    <IonButton
      onClick={() => {
        onRemove({
          name: name,
          ...rest,
        });
      }}
    >
      -
    </IonButton>
  </IonItem>
}
