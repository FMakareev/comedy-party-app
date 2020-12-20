import { connect } from "react-redux";
import { tasksStateSelectors, } from "../../../store/tasks/selectors";
import { State, Actions } from "../../../store/tasks/reducer";
import {fetchTaskListAction} from "../../../store/tasks/actions";


type MapStateToProps = State;
type MapDispatchToProps = Actions

export type TasksStateConnectProps = MapStateToProps & MapDispatchToProps;

export const TasksStateConnect = connect<MapStateToProps,MapDispatchToProps>(
  (state) => ({
    tasks: tasksStateSelectors.getTasks(state),
    apiState: tasksStateSelectors.getApiState(state),
  }),
  (dispatch: any) => ({
    fetchTaskList: () => dispatch(fetchTaskListAction())
  }));
