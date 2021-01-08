import { RouteProps } from "react-router";
import {Home} from './home/Home';

import {routes as cleverestRoutes} from './the-cleverest/routes';
import {routes as blitzRoutes} from './blitz/routes';
import { routes as questionLibraryRoutes } from "./question-library/routes";

export const routes: RouteProps[] = [

  ...blitzRoutes,
  ...cleverestRoutes,
  ...questionLibraryRoutes,



  {
    path: '/',
    exact: true,
    component: Home,
  }
]
