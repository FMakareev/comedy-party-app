import React from 'react';
import {IonCard, IonRow, IonCol, IonButton, IonText} from '@ionic/react';
import './CardPlayer.css';
// @ts-ignore
import IosClose from 'react-ionicons/lib/IosClose'
import {Field} from 'react-final-form';
import {AvatarView} from '../AvatarView/AvatarView';
import {getRandomPlayerAvatar} from "../../mocks/getRandomPlayer";

export enum CardPlayerTypeEnum {
  VIEW_SCORE = 'VIEW_SCORE',
  VIEW_ADD_SCORE = 'VIEW_ADD_SCORE',
  EDIT = 'EDIT',
}

type Props = {
  type: CardPlayerTypeEnum;
  scores?: number;
  onRemove?: (event: any) => void;
  onAddScore?: (event: any) => void;
  fieldName?: string;
  name?: string;
  avatar?: number;
  LeftComponent?: any;
};

export const CardPlayer: React.FC<Props> = (
  {
    scores,
    name,
    avatar,
    onRemove,
    onAddScore,
    fieldName,
    type,
    LeftComponent,
  }) => {
  return (
    <IonCard className={'card-player_wrapper'}>
      <IonRow
        className={'ion-align-items-center'}
      >
        <IonCol>
          <IonRow className={'ion-align-items-center ion-nowrap'}>
            <IonCol
              style={{
                flexGrow: 0,
                width: 'auto',
              }}
            >
              {
                type === CardPlayerTypeEnum.EDIT &&
								<Field
									name={`${fieldName}.avatar`}
									component={({input}) => (<AvatarView
                    onClick={() => input.onChange(getRandomPlayerAvatar())}
                    avatar={input.value}
                  />)}
								/>
              }
              {
                (type === CardPlayerTypeEnum.VIEW_ADD_SCORE ||
                  type === CardPlayerTypeEnum.VIEW_SCORE) &&
								<AvatarView avatar={avatar}/>
              }
            </IonCol>
            <IonCol>
              {
                type === CardPlayerTypeEnum.EDIT &&
								<Field
									className={'card-player_name-input'}
									name={`${fieldName}.name`}
									component="input"
								/>
              }
              {
                (type === CardPlayerTypeEnum.VIEW_ADD_SCORE ||
                  type === CardPlayerTypeEnum.VIEW_SCORE) &&
								<IonText>
                  {
                    name
                  }
								</IonText>
              }

            </IonCol>
          </IonRow>
        </IonCol>

        <IonCol
          style={{
            width: 'auto',
            flexGrow: 0,
          }}
        >
          {
            type === CardPlayerTypeEnum.EDIT &&
						<IonButton
							onClick={onRemove}
							className={'card-player_button'}
							style={{
                fontSize: 0,
              }}
							color={'secondary'}
						>
							<IosClose fontSize={'28px'}/>
						</IonButton>
          }
          {
            type === CardPlayerTypeEnum.VIEW_ADD_SCORE &&
            (<LeftComponent/> ||
							<IonButton
								onClick={onAddScore}
								className={'card-player_button'}
								style={{
                  fontSize: 0,
                }}
								color={'secondary'}
							>
								<IonText
									style={{
                    fontSize: '28px',
                  }}
								>
									+ 1
								</IonText>
							</IonButton>)
          }
          {
            type === CardPlayerTypeEnum.VIEW_SCORE &&
						<IonText
							style={{
                textAlign: 'center',
              }}
						>
							<div>
                {scores || 0}
							</div>
							<div>
								баллов
							</div>
						</IonText>
          }
        </IonCol>
      </IonRow>
    </IonCard>
  );
};
