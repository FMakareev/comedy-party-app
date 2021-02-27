import React from 'react';
import {IonCol, IonGrid, IonRow} from "@ionic/react";
import {Maybe, Player} from "../../types";
import {CardPlayer, CardPlayerTypeEnum} from "../CardPlayer";
import {scoreTableStateSelectors} from "../../store/scoreTable/selectors";
import {useSelector} from "react-redux";
import {playerScoreCompareByPlayerId} from "../../utilities";

type Props = {
  gameId: Maybe<string>;
  players: Player[];
}

export const PlayerScoreList: React.FC<Props> = ({gameId, players}) => {
  const playersScore = useSelector(scoreTableStateSelectors.getPlayersScore(gameId))
  return (
    <IonGrid>
      <IonRow>
        {
          players?.map((item: Player, index: number) => (
            <IonCol
              className={'ion-padding-horizontal'}
              size="12"
              key={index}
            >
              <CardPlayer
                type={CardPlayerTypeEnum.VIEW_SCORE}
                name={item.name}
                avatar={item.avatar}
                scores={playersScore?.find(playerScoreCompareByPlayerId(item.id))?.score}
              />
            </IonCol>
          ))
        }
      </IonRow>
    </IonGrid>
  );
};
