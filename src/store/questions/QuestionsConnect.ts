import {connect} from "react-redux";
import {State, QuestionsActions} from "./reducer";
import {questionsStateSelectors} from "./selectors";
import {fetchQuestionListAction} from "./actions";
import {Store} from "../store";


type MapStateToProps = State;
type MapDispatchToProps = QuestionsActions

export type QuestionsConnectProps = MapStateToProps & MapDispatchToProps;

export const QuestionsConnect = connect<MapStateToProps, MapDispatchToProps, any, Store>(
  (state: Store) => ({
    questions: questionsStateSelectors.getQuestions(state),
    apiState: questionsStateSelectors.getApiState(state),
  }),
  (dispatch: any) => ({
    fetchQuestionList: () => dispatch(fetchQuestionListAction())
  }));

