import React from 'react';
import {useHistory} from "react-router";
import {Header} from '../../../components/Header';
import {IonCard, IonCardContent, IonContent, IonRouterLink, IonText} from '@ionic/react';
import {ItemListWithLoader} from '../../../components/ItemListWithLoader';
import {ApiStateEnum, QuestionTag} from '../../../types';
import './QuestionLibraryCategoryPage.css';


export const QuestionLibraryCategoryPage = () => {
  const {push} = useHistory();

  return (
    <>
      <Header
        onClickBack={() => push('/')}
        title={'Категории'}
      />
      <IonContent className="ion-content">
        <ItemListWithLoader
          apiState={ApiStateEnum.FULFILLED}
          list={Object.keys(QuestionTag)}
          ItemComponent={({data}: any) => (
            <IonRouterLink routerLink={`/question-library/${data}`}>
              <IonCard className={'ion-no-margin ion-padding-vertical card_tag'}>
                <IonCardContent className={'ion-no-padding ion-padding-horizontal ion-text-center size-text-base'}>
                  <IonText>
                    {data}
                  </IonText>
                </IonCardContent>
              </IonCard>
            </IonRouterLink>
          )}
        />
      </IonContent>
    </>
  );
};
