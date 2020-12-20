import { connect } from "react-redux";
import { State, Actions } from "../../../store/game-state/reducer";
import { gameStateSelectors } from "../../../store/game-state/selectors";
import {Player, Task} from "../../../types";

type MapStateToProps = State;
type MapDispatchToProps = Actions

export type CurrentGameStateConnectProps = MapStateToProps & MapDispatchToProps;

export const CurrentGameStateConnect = connect<MapStateToProps,MapDispatchToProps>(
  (state) => ({
    gameIsStart: gameStateSelectors.getGameIsStart(state),
    gameScore: gameStateSelectors.getGameScore(state),
    gameIsEnd: gameStateSelectors.getGameIsEnd(state),
    indexCurrentPlayer: gameStateSelectors.getIndexCurrentPlayer(state),
    indexCurrentTask: gameStateSelectors.getIndexCurrentTask(state),
    gameTasks: gameStateSelectors.getTasks(state),
    attempts: gameStateSelectors.getAttempts(state),
  }),
  (dispatch) => ({
    createNewGame: (props: { players: Player[]; gameTasks: Task[] }) => dispatch(Actions.createNewGame(props)),
    nextPlayer: (props: { score: number }) => dispatch(Actions.nextPlayer(props)),
    nextTask: () => dispatch(Actions.nextTask()),
  }));
