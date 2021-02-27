import React from 'react';
import {IonCol, IonGrid, IonRow, IonLabel} from "@ionic/react";
import {useField} from "react-final-form";
import {get} from 'lodash';

export const GameConfigEdit = () => {
  const {input} = useField('gameConfig');
  console.log(input);
  return (
    <IonGrid>
      <IonRow>

        <IonCol
          size="12"
        >
          <IonLabel
            style={{
              width: '100%',
              display: 'block',
            }}
          >
            Кол-во попыток игрока
          </IonLabel>
          <input
            type={'number'}
            onChange={(event) => input.onChange({
              ...input.value,
              playerAttempts: parseInt(event.target.value)
            })}
            value={get(input.value, ['playerAttempts'])}/>
        </IonCol>

        <IonCol
          size="12"
        >
          <IonLabel
            style={{
              width: '100%',
              display: 'block',
            }}
          >
            Кол-во вопросов в раунде
          </IonLabel>
          <input
            type={'number'}
            onChange={(event) => input.onChange({
              ...input.value,
              questionCountInRound: parseInt(event.target.value)
            })}
            value={get(input.value, ['questionCountInRound'])}
          />
        </IonCol>

        <IonCol
          size="12"
        >
          <IonLabel
            style={{
              width: '100%',
              display: 'block'
            }}
          >
            Кол-во раундов
          </IonLabel>
          <input
            type={'number'}
            onChange={(event) => input.onChange({
              ...input.value,
              roundsCount: parseInt(event.target.value)
            })}
            value={get(input.value, ['roundsCount'])}/>
        </IonCol>

      </IonRow>
    </IonGrid>
  );
};
