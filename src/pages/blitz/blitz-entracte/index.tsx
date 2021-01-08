import React, {useState} from 'react';
import {flow, first} from 'lodash';
import {useDispatch, useSelector} from "react-redux";
import {playersStateSelectors} from '../../../store/players/selectors';
import {Maybe, Player, PlayerScore} from "../../../types";
import {Header} from "../../../components/Header";
import {useHistory} from "react-router";
import {IonButton, IonCol, IonContent, IonGrid, IonRow} from "@ionic/react";
import {Footer} from "../../../components/Footer/Footer";
import {GameStateActions} from "../../../store/game-state/reducer";
import {gameStateSelectors} from "../../../store/game-state/selectors";
import {scoreTableStateSelectors} from "../../../store/scoreTable/selectors";
import {playerScoreCompareByScore, playerCompareById} from "../../../utilities";
import {EndGameAlert} from "../../../components/EndGameAlert/EndGameAlert";
import { PlayerScoreList } from '../../../components/PlayerScoreList/PlayerScoreList';

export const BlitzEntractePage = () => {
  const {push} = useHistory();
  const [isOpenAlert, setIsOpenAlert] = useState(false);

  const players: Player[] = useSelector(playersStateSelectors.getPlayers);
  const currentRound: number = useSelector(gameStateSelectors.getCurrentRound);
  const gameId: Maybe<string> = useSelector(gameStateSelectors.getGameId);
  const playerScores: Maybe<PlayerScore[]> = useSelector(scoreTableStateSelectors.getPlayersScore(gameId));
  const dispatch = useDispatch();

  const goToMenu = () => setIsOpenAlert(true);
  const goToRound = () => push('/game/blitz/round');
  const nextRound = () => dispatch(GameStateActions.nextRound());
  const resetAttempts = () => dispatch(GameStateActions.resetAttempts());
  const nextPlayer = () => {
    if (!playerScores) {
      return
    }
    const playerScore: Maybe<PlayerScore> = first([...playerScores].sort(playerScoreCompareByScore));

    if (!playerScore) {
      return
    }
    dispatch(GameStateActions.changeCurrentPlayer(players.findIndex(playerCompareById(playerScore.player.id))))
  }

  return (
    <>
      <Header
        onClickBack={goToMenu}
        title={`Конец ${currentRound + 1} раунда`}
      />
      <EndGameAlert
        isOpen={isOpenAlert}
        onDidDismiss={() => setIsOpenAlert(false)}
        onOk={() => push('/')}
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
                onClick={flow(nextRound, resetAttempts, nextPlayer, goToRound)}
              >
                Следующий раунд
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </Footer>
    </>
  );
};
