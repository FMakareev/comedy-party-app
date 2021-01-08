import { BlitzSettingsPage } from "./blitz-settings";
import { BlitzRoundPage } from "./blitz-round";
import { BlitzEntractePage } from "./blitz-entracte";
import { BlitzEndPage } from "./blitz-end";
import {RouteProps} from "react-router";

export const routes: RouteProps[] = [
  {
    path: '/game/blitz/settings',
    exact: true,
    component: BlitzSettingsPage,
  },
  {
    path: '/game/blitz/round',
    exact: true,
    component: BlitzRoundPage,
  },
  {
    path: '/game/blitz/entracte',
    exact: true,
    component: BlitzEntractePage,
  },
  {
    path: '/game/blitz/end',
    exact: true,
    component: BlitzEndPage,
  },
]
