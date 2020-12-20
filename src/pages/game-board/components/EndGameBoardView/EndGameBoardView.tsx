import React from 'react';
import {get} from "lodash";
import {CurrentPlayerView} from "../CurrentGameBoardView/CurrentPlayerView";
import {CurrentGameStateConnect, CurrentGameStateConnectProps} from "../../enhancers/currentGameStateConnect";
import {PlayerScore} from "../../../../types";
import {IonRow} from "@ionic/react";
import {StartNewGameButton} from "../StartNewGameButton";

type Props = CurrentGameStateConnectProps;

export const EndGameBoardViewRender = (props: Props) => {
  return (
    <div>
      <h1>Конец игры</h1>
      <br/>
      {
        get(props, ['gameScore', 'players'], []).map((item: PlayerScore, index: number) => (<>
          <CurrentPlayerView
            player={item}
            key={index}
          />
          <br/>
        </>))
      }
      <IonRow>
        <StartNewGameButton/>
      </IonRow>

    </div>
  );
};

export const EndGameBoardView = CurrentGameStateConnect(EndGameBoardViewRender);
