import React from 'react';
import {useHistory, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {fetchQuestionListAction} from "../../../store/questions/actions";
import {Header} from "../../../components/Header";
import {questionsStateSelectors} from "../../../store/questions/selectors";
import {IonContent} from "@ionic/react";
import {ItemListWithLoader} from "../../../components/ItemListWithLoader";
import {QuestionTag} from "../../../types";
import { QuestionCard } from '../../../components/QuestionCard/QuestionCard';

export const QuestionLibraryQuestionsPage = () => {
  const {push} = useHistory();
  const {tag} = useParams<{ tag: QuestionTag }>();
  const dispatch = useDispatch();

  const apiState = useSelector(questionsStateSelectors.getApiState);
  const questions = useSelector(questionsStateSelectors.getQuestionsByTag(tag));

  React.useEffect(() => {
    dispatch(fetchQuestionListAction());
  }, [dispatch]);

  return (
    <>
      <Header
        onClickBack={() => push('/question-library')}
        title={tag}
      />
      <IonContent className="ion-content">

        <ItemListWithLoader
          apiState={apiState}
          list={questions}
          ItemComponent={({data}: any) => (<QuestionCard {...data} isShowAnswer={true}/>)}
        />
      </IonContent>
    </>
  );
};
