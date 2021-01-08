import {RouteProps} from "react-router";
import { SettingsPage } from "./settings";
import { RoundPage } from "./round";
import { CategorySelectionPage } from "./category-selection";
import { EndPage } from "./end";

export const routes: RouteProps[] = [
  {
    path: '/game/cleverest/settings',
    exact: true,
    component: SettingsPage,
  },
  {
    path: '/game/cleverest/round/:tag',
    exact: true,
    component: RoundPage,
  },
  {
    path: '/game/cleverest/category-selection',
    exact: true,
    component: CategorySelectionPage,
  },
  {
    path: '/game/cleverest/entracte',
    exact: true,
    component: () => null,
  },
  {
    path: '/game/cleverest/end',
    exact: true,
    component: EndPage,
  },
]
