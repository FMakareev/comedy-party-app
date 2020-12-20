import React from 'react';
import { IonText } from '@ionic/react';
import {get} from 'lodash';
import {PlayerScore} from "../../../../types";

type Props = {
  player?: PlayerScore;
}

export const CurrentPlayerView = ({player}:Props) => {
  return (
    <IonText>
      {get(player,['player','name'],'none')} - {get(player,'score','none')}
    </IonText>
  );
};
