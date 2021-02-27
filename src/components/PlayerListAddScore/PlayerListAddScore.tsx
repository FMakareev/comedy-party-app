import React from 'react';
import {IonButton, IonCol, IonGrid, IonRow, IonText} from "@ionic/react";
import {Player, Maybe} from "../../types";
import {CardPlayer, CardPlayerTypeEnum} from "../CardPlayer";
import {scoreTableStateSelectors} from "../../store/scoreTable/selectors";
import {useSelector} from "react-redux";
import {playerScoreCompareByPlayerId, playerCompareById} from '../../utilities';
import cn from 'classnames';

type Props = {
  gameId: Maybe<string>;
  players: Player[];

  selected: Maybe<Player[]>;
  onSelect: (player: Player) => any;
}

export const PlayerListAddScore: React.FC<Props> = ({players, gameId, selected, onSelect}) => {
  const playersScore = useSelector(scoreTableStateSelectors.getPlayersScore(gameId));

  return (
    <IonGrid>
      <IonRow>
        {
          players?.map((item: Player, index) => (
            <IonCol
              className={'ion-padding-horizontal'}
              size="12"
              key={index}
            >
              <CardPlayer
                type={CardPlayerTypeEnum.VIEW_ADD_SCORE}
                name={item.name}
                avatar={item.avatar}
                scores={playersScore?.find(playerScoreCompareByPlayerId(item.id))?.score}
                LeftComponent={() => (<IonButton
                  onClick={() => onSelect(item)}
                  className={cn('card-player_button', {
                    'card-player_button--active': Array.isArray(selected) && selected.findIndex(playerCompareById(item.id)) !== -1,
                  })}
                  style={{
                    fontSize: 0,
                  }}
                  color={'secondary'}
                >
                  <IonText
                    style={{
                      fontSize: '20px',
                    }}
                  >
                    + 1
                  </IonText>
                </IonButton>)}
              />
            </IonCol>
          ))
        }
      </IonRow>
    </IonGrid>
  );
};
