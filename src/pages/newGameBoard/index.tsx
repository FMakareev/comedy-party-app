import React from 'react';
import './NewGameBoard.css';
import {
  IonContent,
} from '@ionic/react';
import { QuestionCard } from './components/QuestionCard/QuestionCard';
import { CurrentThemeAndQuestionCounter } from './components/CurrentThemeAndQuestionCounter/CurrentThemeAndQuestionCounter';
import { GameBoardHeader } from './components/GameBoardHeader/GameBoardHeader';
import { GameBoardFooter } from './components/GameBoardFooter/GameBoardFooter';


export const NewGameBoard = () => {
  return <>
    <GameBoardHeader/>

    <IonContent className="ion-content">
      <CurrentThemeAndQuestionCounter/>
      <QuestionCard/>
    </IonContent>

    <GameBoardFooter/>
  </>
}
