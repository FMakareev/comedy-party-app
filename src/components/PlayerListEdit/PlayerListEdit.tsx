import React from 'react';
import {IonCol, IonGrid, IonRow} from "@ionic/react";
import {FieldArray} from "react-final-form-arrays";
import {CardPlayer, CardPlayerTypeEnum} from "../CardPlayer";
import {CardAddPlayer} from "../CardAddPlayer";
import {getRandomPlayer} from "../../mocks/getRandomPlayer";

type Props = {
  mutators: any;
}

export const PlayerListEdit: React.FC<Props> = ({mutators}) => {
  return (
    <IonGrid>
      <IonRow>
        <FieldArray name="players">
          {
            ({fields}) =>
              fields.map((name, index) => (
                <IonCol
                  size="12"
                  key={name}
                >
                  <CardPlayer
                    type={CardPlayerTypeEnum.EDIT}
                    fieldName={name}
                    onRemove={(event: any) => {
                      event.stopPropagation();
                      event.preventDefault();
                      fields.remove(index)
                    }}
                  />
                </IonCol>
              ))
          }
        </FieldArray>
        <IonCol size="12">
          <CardAddPlayer
            onClick={() => mutators.push('players', getRandomPlayer())}
          />
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
