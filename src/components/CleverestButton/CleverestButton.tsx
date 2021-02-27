import React, {useCallback, useState} from 'react';
import {CleverestPopover} from "../../pages/blitz/blitz-round/components/CleverestPopover";
import {IonFabButton} from "@ionic/react";
import {Question} from "../../types";
import {useSelector} from "react-redux";
import {gameStateSelectors} from "../../store/game-state/selectors";
import {isEmpty} from "lodash";

type Props = {}

export const CleverestButton: React.FC<Props> = () => {
  const [popoverState, setShowPopover] = useState({showPopover: false, event: undefined});

  const currentQuestion: Question = useSelector(gameStateSelectors.getCurrentQuestion);
  const isShowCleverest = useCallback(() => !isEmpty(currentQuestion?.cleverest), [currentQuestion]);

  const openPopover = useCallback((e: any) => {
    e.persist();
    setShowPopover({showPopover: true, event: e})
  }, [setShowPopover])

  return (
    <>
      <CleverestPopover
        event={popoverState.event}
        isOpen={popoverState.showPopover}
        onDidDismiss={() => setShowPopover({showPopover: false, event: undefined})}
        content={currentQuestion?.cleverest}
      />

      <IonFabButton
        className={'ion-no-margin'}
        disabled={!isShowCleverest()}
        size={'small'}
        onClick={openPopover}
      >
        ум
      </IonFabButton>
    </>
  );
};
