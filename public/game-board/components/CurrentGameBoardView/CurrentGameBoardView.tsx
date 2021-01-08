import React from 'react';
import { TaskCounterView } from './TaskCounterView';
import {CurrentGameStateConnect, CurrentGameStateConnectProps} from "../../enhancers/currentGameStateConnect";
import { GameTaskView } from './GameTaskView';
import { CurrentGameBoardFooter } from './CurrentGameBoardFooter';
import { CurrentPlayerView } from './CurrentPlayerView';
import {get} from 'lodash';

type Props = CurrentGameStateConnectProps;

export const CurrentGameBoardViewRender = (props: Props) => {
  console.log('CurrentGameBoardViewRender: ',props);
  return (
    <div>
      <TaskCounterView
        indexCurrentTask={props.indexCurrentTask}
        tasksLength={get(props,['gameTasks','length'])}
      />
      <GameTaskView
        task={get(props,['gameTasks',props.indexCurrentTask])}
      />
      <CurrentPlayerView
        player={get(props,['gameScore','players',props.indexCurrentPlayer])}
      />
      <CurrentGameBoardFooter {...props}/>
    </div>
  );
};

export const CurrentGameBoardView = CurrentGameStateConnect(CurrentGameBoardViewRender);
