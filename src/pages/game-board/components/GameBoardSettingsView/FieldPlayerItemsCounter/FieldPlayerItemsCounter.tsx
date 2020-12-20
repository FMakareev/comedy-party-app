import React from "react";
import {IonButton, IonInput, IonItem} from "@ionic/react";
import { getRandomPlayer } from "../../../../../mocks/getRandomPlayer";
import { PlayersStateConnect, PlayersStateConnectProps } from "../../../enhancers/playersStateConnect";


type Props = PlayersStateConnectProps;

export const FieldPlayerItemsCounterRender = ({players, addPlayer,removePlayer}: Props) => {
  return <IonItem>
    <IonButton
      onClick={() => {
        if (players.length>0)  {
          removePlayer(players[players.length - 1]);
        }
      }}
    >
      -
    </IonButton>
    <IonInput
      value={players.length}
      disabled
    />
    <IonButton
      onClick={() => {
        addPlayer(getRandomPlayer());
      }}
    >
      +
    </IonButton>
  </IonItem>
}

export const FieldPlayerItemsCounter = PlayersStateConnect(FieldPlayerItemsCounterRender);
