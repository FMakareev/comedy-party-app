import React from 'react';
import {Header} from "../Header";
import {IonButton, IonCol, IonContent, IonGrid, IonRow, IonText} from "@ionic/react";
import {FieldArray} from "react-final-form-arrays";
import {CardPlayer} from "../CardPlayer";
import {CardAddPlayer} from "../CardAddPlayer";
import {getRandomPlayer} from "../../mocks/getRandomPlayer";
import {Footer} from "../Footer/Footer";
import {FormRenderProps} from "react-final-form";
import { PlayerListEdit } from '../PlayerListEdit/PlayerListEdit';
import { GameConfigEdit } from '../GameConfigEdit/GameConfigEdit';

type Props = {
  onClickBack(): void;
}

export const FormSettingsRender = <TFormValues extends {}>({onClickBack}: Props): React.FC<FormRenderProps<TFormValues>> => (
  {
    handleSubmit,
    form: {
      mutators
    },
    error,
  }: FormRenderProps<TFormValues>
) => {
  return (
    <>
      <Header
        onClickBack={onClickBack}
        title={'Настройки'}
      />
      <IonContent color={'transparent'}>
        <PlayerListEdit
          mutators={mutators}
        />
        <GameConfigEdit/>
      </IonContent>
      <Footer>
        <IonGrid>
          <IonRow>
            <IonCol>
              {
                error &&
								<IonText color={'dark'}>
                  {error}
								</IonText>
              }
              <IonButton
                expand="full"
                onClick={handleSubmit}
              >
                Начать
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </Footer>
    </>
  );
};
