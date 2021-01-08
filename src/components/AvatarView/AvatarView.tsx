import React from 'react';
import {IonAvatar} from '@ionic/react';
import './AvatarView.css';
import {AvatarIconsMap} from '../../assets/avatars/AvatarIconsMap';
import cn from 'classnames';

type Props = {
  avatar?: number;
  onClick?: () => any;
  size?: ('avatar-view_sm' | 'avatar-view_md')
}

export const AvatarView: React.FC<Props> = (
  {
    avatar,
    size = 'avatar-view_md',
    onClick
  }
) => {

  return (
    <IonAvatar onClick={onClick} className={cn('avatar-view_placeholder', size)}>
      {
        avatar &&
				<img src={AvatarIconsMap[avatar]} alt=""/>
      }
    </IonAvatar>
  );
};
