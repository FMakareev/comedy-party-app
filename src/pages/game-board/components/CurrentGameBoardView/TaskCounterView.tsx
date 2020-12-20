import React from 'react';

type Props = {
  tasksLength: number;
  indexCurrentTask: number;
}

export const TaskCounterView = (props: Props) => {
  return (
    <div className={'ion-text-center ion-padding'}>
      {props.indexCurrentTask}/{props.tasksLength}
    </div>
  );
};
