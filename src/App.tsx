import React from 'react';
import { Route } from 'react-router-dom';
import {IonApp, IonGrid} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Provider } from 'react-redux'
import {store} from './store/store';

import {routes} from './pages/routes';

//<editor-fold desc="IONIC CSS">
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import {BackgroundGradient} from "./components/BackgroundGradient/BackgroundGradient";
//</editor-fold>

const App: React.FC = () => (
  <Provider store={store}>
    <IonApp>
      <BackgroundGradient/>
      <IonReactRouter basename={'/'}>
        {
          routes.map((route, index) => <Route {...route} key={index} />)
        }
      </IonReactRouter>
    </IonApp>
  </Provider>
);

export default App;
