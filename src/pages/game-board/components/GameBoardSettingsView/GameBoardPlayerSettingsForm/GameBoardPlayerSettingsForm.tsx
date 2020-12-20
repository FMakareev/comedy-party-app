import React, {Component} from 'react';
import {IonList, IonItemDivider} from "@ionic/react";
import { FieldPlayerItemsCounter } from '../FieldPlayerItemsCounter/FieldPlayerItemsCounter';
import { FieldPlayerItemList } from '../FieldPlayerItemList/FieldPlayerItemList';

export class GameBoardPlayerSettingsForm extends Component {
  render() {
    return (
      <IonList>
        <FieldPlayerItemsCounter/>
        <FieldPlayerItemList/>
        <IonItemDivider/>
      </IonList>
    );
  }
}
