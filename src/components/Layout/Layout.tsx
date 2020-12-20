import {IonContent, IonPage} from '@ionic/react';
import React from 'react';

export const Layout: React.FC = ({children}) => {
  return (
    <IonPage>
      <IonContent>
        {children}
      </IonContent>
    </IonPage>
  );
};
