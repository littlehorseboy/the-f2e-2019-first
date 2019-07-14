import React from 'react';
import { useSelector } from 'react-redux';
import RingtonesMain from '../../components/RingtonesMain/RingtonesMain';
import { TaskInterface } from '../WorkCountdown/WorkCountdown';
import { MatchLocationProps } from '../../router/Router';

export default function Ringtones(props: MatchLocationProps): JSX.Element {
  const tasks = useSelector((
    state: { toDoListReducer: { tasks: TaskInterface[] } },
  ): TaskInterface[] => state.toDoListReducer.tasks);

  return (
    <>
      <RingtonesMain tasks={tasks} match={props.match} location={props.location} />
    </>
  );
}
