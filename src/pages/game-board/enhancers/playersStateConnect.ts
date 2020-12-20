import { connect } from "react-redux";
import { State, Actions } from "../../../store/players/reducer";
import { playersStateSelectors } from "../../../store/players/selectors";
import {Player} from "../../../types";


type MapStateToProps = State;
type MapDispatchToProps = Actions

export type PlayersStateConnectProps = MapStateToProps & MapDispatchToProps;

export const PlayersStateConnect = connect<MapStateToProps,MapDispatchToProps>(
  (state) => ({
    players: playersStateSelectors.getPlayers(state),
  }),
  (dispatch) => ({
    addPlayer: (player:Player) => dispatch(Actions.addPlayer(player)),
    removePlayer: (player:Player) => dispatch(Actions.removePlayer(player)),
    changePlayer: (player:Player) => dispatch(Actions.changePlayer(player)),
  }));
