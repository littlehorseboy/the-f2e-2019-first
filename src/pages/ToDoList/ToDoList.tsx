import React from 'react';
import { useSelector } from 'react-redux';
import ToDoListMain from '../../components/ToDoListMain/ToDoListMain';
import { TaskInterface } from '../WorkCountdown/WorkCountdown';
import { MatchLocationProps } from '../../router/Router';

export default function ToDoList(props: MatchLocationProps): JSX.Element {
  const tasks = useSelector(
    (
      state: { toDoListReducer: { tasks: TaskInterface[] } },
    ): TaskInterface[] => state.toDoListReducer.tasks,
  );

  return (
    <>
      <ToDoListMain tasks={tasks} match={props.match} location={props.location} />
    </>
  );
}
