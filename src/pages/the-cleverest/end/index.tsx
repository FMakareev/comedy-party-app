import React from 'react';
import {Header} from "../../../components/Header";
import {useHistory} from "react-router";
import {IonButton, IonCol, IonContent, IonGrid, IonRow} from "@ionic/react";
import {PlayerScoreList} from "../../../components/PlayerScoreList/PlayerScoreList";
import {Maybe, Player} from "../../../types";
import {useSelector} from "react-redux";
import {gameStateSelectors} from "../../../store/game-state/selectors";
import {Footer} from "../../../components/Footer/Footer";
import {playersStateSelectors} from "../../../store/players/selectors";

export const EndPage = () => {
  const {push} = useHistory();
  const goToMenu = () => push('/')
  const gameId: Maybe<string> = useSelector(gameStateSelectors.getGameId);
  const players: Player[] = useSelector(playersStateSelectors.getPlayers);

  return (
    <>
      <Header
        onClickBack={goToMenu}
        title={`Конец игры`}
      />
      <IonContent color={'transparent'}>
        <PlayerScoreList
          players={players}
          gameId={gameId}
        />
      </IonContent>
      <Footer>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton
                expand="full"
                onClick={goToMenu}
              >
                Завершить игру
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </Footer>
    </>
  );
};
