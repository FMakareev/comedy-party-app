import React from 'react';
import './NewGameBoard.css';
import {IonContent, IonGrid, IonRow, IonCol,} from '@ionic/react';
import {CurrentThemeAndQuestionCounter} from '../../../components/CurrentThemeAndQuestionCounter/CurrentThemeAndQuestionCounter';
import {GameBoardHeader} from './components/GameBoardHeader/GameBoardHeader';
import {GameBoardFooter} from './components/GameBoardFooter/GameBoardFooter';
import {Question, QuestionTag, Maybe} from "../../../types";
import {useSelector} from "react-redux";
import {gameStateSelectors} from "../../../store/game-state/selectors";
import {QuestionCard} from "../../../components/QuestionCard/QuestionCard";
import {useMountThemeAndQuestions} from "../../../hooks/useMountThemeAndQuestions/useMountThemeAndQuestions";
import { useGetRandomCategory } from '../../../hooks/useGetRandomCategory/useGetRandomeCategory';

export const BlitzRoundPage: React.FC<any> = () => {
  const currentRound = useSelector(gameStateSelectors.getCurrentRound);
  const themeHistory: QuestionTag[] = useSelector(gameStateSelectors.getThemeHistory);
  const theme = useGetRandomCategory({ excludeCategory: themeHistory, currentRound });
  const currentQuestion: Maybe<Question> = useSelector(gameStateSelectors.getCurrentQuestion);
  const isShowAnswer: boolean = useSelector(gameStateSelectors.getIsShowAnswer);

  const currentTheme: Maybe<QuestionTag> = useSelector(gameStateSelectors.getCurrentTheme);
  const getCurrentQuestionIndex: number = useSelector(gameStateSelectors.getCurrentQuestionIndex);
  const gameQuestions: Question[] = useSelector(gameStateSelectors.getGameQuestions);

  useMountThemeAndQuestions({
    theme,
  });

  return (<>
    <GameBoardHeader/>

    <IonContent className="ion-content">
      <CurrentThemeAndQuestionCounter
        currentTheme={currentTheme}
        getCurrentQuestionIndex={getCurrentQuestionIndex}
        gameQuestionsLength={gameQuestions.length}
      />
      <IonGrid>
        <IonRow>
          <IonCol className={'ion-padding'} size={'12'}>
            <QuestionCard isShowAnswer={isShowAnswer} {...currentQuestion}/>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>

    <GameBoardFooter/>
  </>)
}
