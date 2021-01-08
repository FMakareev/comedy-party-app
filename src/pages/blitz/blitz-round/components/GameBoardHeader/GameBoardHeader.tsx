import React, { useState } from 'react';
import {IonGrid, IonLabel, IonRow} from "@ionic/react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router";
import './GameBoardHeader.css';
import {Header} from '../../../../../components/Header';
import {Maybe, Player} from "../../../../../types";
import {gameStateSelectors} from "../../../../../store/game-state/selectors";
import {EndGameAlert} from "../../../../../components/EndGameAlert/EndGameAlert";
import { AvatarView } from '../../../../../components/AvatarView/AvatarView';

export const GameBoardHeader = () => {
  const {push} = useHistory();
  const currentPlayer: Maybe<Player> = useSelector(gameStateSelectors.getGameCurrentPlayer);
  const [IsOpenAlert, setIsOpenAlert] = useState(false);

  return (<>
      <Header
        onClickBack={() => setIsOpenAlert(true)}
        title={(<IonGrid>
          <IonRow className={'ion-padding-vertical ion-nowrap ion-align-items-center'}>
            <AvatarView size={'avatar-view_sm'} avatar={currentPlayer?.avatar} />
            <IonLabel className={'game-board-header_label'}>
              {currentPlayer?.name}
            </IonLabel>
          </IonRow>
        </IonGrid>)}
      />
      <EndGameAlert
        isOpen={IsOpenAlert}
        onDidDismiss={() => setIsOpenAlert(false)}
        onOk={() => push('/')}
      />
    </>
  )
};
