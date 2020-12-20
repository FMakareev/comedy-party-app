import { RouteProps } from "react-router";
import {Home} from './home/Home';
import { GameBoardPage } from "./game-board/GameBoardPage";
import {NewGameBoard} from "./newGameBoard";

export const routes: RouteProps[] = [
  {
    path: '/game-board',
    exact: true,
    component: NewGameBoard,
  },
  {
    path: '/',
    exact: true,
    component: Home,
  }
]
