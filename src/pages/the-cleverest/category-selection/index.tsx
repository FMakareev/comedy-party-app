import React from 'react';
import {Header} from "../../../components/Header";
import {useHistory} from "react-router";
import {IonCard, IonCardContent, IonContent, IonText} from "@ionic/react";
import {ItemListWithLoader} from "../../../components/ItemListWithLoader";
import {ApiStateEnum, QuestionTag} from "../../../types";

export const CategorySelectionPage = () => {
  const {push} = useHistory();

  const startGame = (data: any) => () => push(`/game/cleverest/round/${data}`)

  return (
    <>
      <Header
        onClickBack={() => push('/game/cleverest/settings')}
        title={'Выберите тему'}
      />
      <IonContent className="ion-content">
        <ItemListWithLoader
          apiState={ApiStateEnum.FULFILLED}
          list={Object.keys(QuestionTag)}
          ItemComponent={({data}: any) => (
            <IonCard
              onClick={startGame(data)}
              className={'ion-no-margin ion-padding-vertical card_tag'}
            >
              <IonCardContent className={'ion-no-padding ion-padding-horizontal ion-text-center size-text-base'}>
                <IonText>
                  {data}
                </IonText>
              </IonCardContent>
            </IonCard>
          )}
        />
      </IonContent>
    </>
  );
};
