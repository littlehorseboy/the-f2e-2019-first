import React from 'react';
import { useSelector } from 'react-redux';
import AnalyticsMain from '../../components/AnalyticsMain/AnalyticsMain';
import { TaskInterface } from '../WorkCountdown/WorkCountdown';
import { MatchLocationProps } from '../../router/Router';

export default function Analytics(props: MatchLocationProps): JSX.Element {
  const tasks = useSelector((
    state: { toDoListReducer: { tasks: TaskInterface[] } },
  ): TaskInterface[] => state.toDoListReducer.tasks);

  return (
    <>
      <AnalyticsMain tasks={tasks} match={props.match} location={props.location} />
    </>
  );
}
