import React from 'react';
import './BigRoundCounter.css';

type Props = {
  count: number;
}

export const BigRoundCounter: React.FC<Props> = ({count}) => {
  return (
    <div className={'big-round-counter_wrapper'}>
      <div className={'big-round-counter_count'}>
        {count}
      </div>
      <div className={'big-round-counter_label'}>
        раунд
      </div>
    </div>
  );
};
