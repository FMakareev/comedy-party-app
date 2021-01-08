import React from 'react';
import {ApiStateEnum} from "../../types";
import {IonCol, IonGrid, IonProgressBar, IonRow, IonText} from '@ionic/react';

type Props = {
  apiState: ApiStateEnum;
  list: any[];
  ItemComponent: any;
}

export const ItemListWithLoader: React.FC<Props> = (
  {
    apiState,
    list,
    ItemComponent
  }
) => {
  return (
    <IonGrid>
      {
        apiState === ApiStateEnum.FULFILLED &&
				<IonRow>
          {
            list.map((item, index) => (
              <IonCol
                size={'12'}
                key={index}>
                <ItemComponent
                  data={item}
                />
              </IonCol>
            ))
          }

				</IonRow>
      }
      {
        apiState === ApiStateEnum.PENDING &&
				<IonRow>
					<IonCol>
						<IonProgressBar type="indeterminate"/>
					</IonCol>
				</IonRow>
      }
      {
        apiState === ApiStateEnum.REJECTED &&
				<IonRow>
					<IonCol>
						<IonText>
							<p>
								Ошибка
							</p>
						</IonText>
					</IonCol>
				</IonRow>
      }
    </IonGrid>
  );
};
