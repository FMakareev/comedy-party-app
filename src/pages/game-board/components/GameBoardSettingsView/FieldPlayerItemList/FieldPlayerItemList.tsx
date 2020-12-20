import React from 'react';
import {FieldPlayerItem} from "../FieldPlayerItem/FieldPlayerItem";
import {PlayersStateConnect, PlayersStateConnectProps} from "../../../enhancers/playersStateConnect";

type Props = PlayersStateConnectProps;

export const FieldPlayerItemListRender = ({players, changePlayer, removePlayer}: Props) => (<>
  {
    players.map((props) => <FieldPlayerItem
      {...props}
      key={props.id}
      onIonChange={changePlayer}
      onRemove={removePlayer}
    />)
  }
</>)

export const FieldPlayerItemList = PlayersStateConnect(FieldPlayerItemListRender);
