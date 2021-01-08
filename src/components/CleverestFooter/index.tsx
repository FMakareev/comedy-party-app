import React, {useState} from 'react';
import {IonFabButton, IonFooter, IonGrid, IonImg, IonRow} from "@ionic/react";
import {CleverestPopover} from "../../pages/blitz/blitz-round/components/CleverestPopover";
import icon from "../../assets/icons/1F60B.svg";
import {Question} from "../../types";
import {useDispatch, useSelector} from "react-redux";
import {gameStateSelectors} from "../../store/game-state/selectors";
import {isNil} from "lodash";
import {GameStateActions} from "../../store/game-state/reducer";
import {useToEntracte} from "../../hooks/useToEntracte";

export const CleverestFooter = () => {

  const dispatch = useDispatch();

  const [popoverState, setShowPopover] = useState({showPopover: false, event: undefined});
  const currentQuestion: Question = useSelector(gameStateSelectors.getCurrentQuestion);
  const isShowCleverest = () => !isNil(currentQuestion?.cleverest)
  const isShowAnswer: boolean = useSelector(gameStateSelectors.getIsShowAnswer);
  const showAnswer = (isShow: boolean) => () => dispatch(GameStateActions.changeShowAnswer(isShow));

  const toEntracte = useToEntracte({
    endLink: '/game/cleverest/end',
    entracteLink: '/game/cleverest/entracte'
  });

  const next = () => {
    showAnswer(false)();
    dispatch(GameStateActions.nextQuestion());

    toEntracte();
  }

  return (
    <IonFooter mode={'ios'}>
      <IonGrid>
        <IonRow className={'ion-justify-content-between ion-align-items-center ion-padding'}>
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
            onClick={
              (e: any) => {
                e.persist();
                setShowPopover({showPopover: true, event: e})
              }}
          >
            ум
          </IonFabButton>
          {
            !isShowAnswer &&
						<IonFabButton
							className={'ion-no-margin'}
							onClick={showAnswer(true)}
							size={'small'}
						>
							<IonImg style={{width: '32px'}} src={icon}/>
						</IonFabButton>
          }
          {
            isShowAnswer &&
						<IonFabButton
							className={'ion-no-margin'}
							onClick={next}
							size={'small'}
						>
							<IonImg style={{width: '32px'}} src={icon}/>
						</IonFabButton>
          }
        </IonRow>
      </IonGrid>
    </IonFooter>
  );
};
