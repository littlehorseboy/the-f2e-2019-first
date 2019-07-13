import React from 'react';
import { useSelector } from 'react-redux';
import ToDoListMain from '../../components/ToDoListMain/ToDoListMain';
import { TaskInterface } from '../WorkCountdown/WorkCountdown';


export default function ToDoList(): JSX.Element {
  const tasks = useSelector(
    (
      state: { toDoListReducer: { tasks: TaskInterface[] } },
    ): TaskInterface[] => state.toDoListReducer.tasks,
  );

  return (
    <>
      <div>123</div>
      {/* <ToDoListMain tasks={tasks} /> */}
    </>
  );
}
