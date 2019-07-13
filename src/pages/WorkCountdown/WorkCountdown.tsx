import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import H from 'history';
import { Match } from '../../router/Router';
import WorkCountdownMain from '../../components/WorkCountdownMain/WorkCountdownMain';

interface Props {
  match: Match<object> | null;
  location: H.Location;
}

export interface TasksInterface {
  [index: number]: {
    taskId: string;
    taskName: string;
    workCount: number;
    breakCount: number;
    done: boolean;
    doneTime: Date;
  };
}

export default function WorkCountdown(props: Props): JSX.Element {
  const params = new URLSearchParams(props.location.search);

  const tasks = useSelector(
    (
      state: { toDoListReducer: { tasks: TasksInterface } },
    ): TasksInterface => state.toDoListReducer.tasks,
  );

  return (
    <>
      {!params.get('taskId')
        && tasks[0]
        && tasks[0].taskId
        && <Redirect to={`/?taskId=${tasks[0].taskId}`} />}
      <WorkCountdownMain tasks={tasks} />
    </>
  );
}
