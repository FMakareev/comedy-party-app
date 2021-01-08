import React from 'react';
import {IonCard, IonRow, IonCol, IonButton, IonText} from '@ionic/react';
import './CardAddPlayer.css';
// @ts-ignore
import IosAdd from 'react-ionicons/lib/IosAdd'

type Props = {
  onClick?: () => void;
}

/**
 * @desc Кнопка для создания игрока
 * */
export const CardAddPlayer: React.FC<Props> = (
  {
    onClick
  }) => {
  return (
    <IonCard
      onClick={onClick}
      className={'card-add-player_wrapper'}>
      <IonRow
        className={'ion-align-items-center'}
      >
        <IonCol>
          <IonRow className={'ion-align-items-center'}>
            <IonCol
              style={{
                flexGrow: 0,
                width: 'auto',
              }}
            >
              <div
                style={{
                  backgroundColor: '#F0F1F5',
                  borderRadius: '100px',
                  width: '40px',
                  height: '40px',
                  border: '1px dashed rgba(0, 0, 0, 0.5)',
                }}
              >

              </div>

            </IonCol>
            <IonCol>
              <IonText>
                Новый игрок
              </IonText>
            </IonCol>
          </IonRow>
        </IonCol>
        <IonCol
          style={{
            width: 'auto',
            flexGrow: 0,
          }}
        >
          <IonButton
            style={{
              width: '40px',
              height: '40px',
              fontSize: 0,
            }}
            color={'secondary'}
          >
            <IosAdd fontSize={'28px'}/>
          </IonButton>
        </IonCol>
      </IonRow>
    </IonCard>
  );
};
