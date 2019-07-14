import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import WorkCountdownMain from '../../components/WorkCountdownMain/WorkCountdownMain';
import { MatchLocationProps } from '../../router/Router';
import { changeCurrentTaskId } from '../../actions/toDoList/toDoListSelected';

export interface TaskInterface {
  taskId: string;
  taskName: string;
  workCount: number;
  breakCount: number;
  done: boolean;
  doneTime: Date | null;
}

export default function WorkCountdown(props: MatchLocationProps): JSX.Element {
  const tasks = useSelector((
    state: { toDoListReducer: { tasks: TaskInterface[] } },
  ): TaskInterface[] => state.toDoListReducer.tasks);

  const currentTaskId = useSelector((
    state: { toDoListSelectedReducer: { taskId: string } },
  ): string => state.toDoListSelectedReducer.taskId);

  const searchParams = new URLSearchParams(props.location.search);

  // 沒有指定路由的時候 會去撈資料列的第一筆資料 或是 紀錄中的 currentTaskId
  let redirectDOM;

  if (props.location.pathname === '/') {
    if (!searchParams.get('taskId')) {
      if (currentTaskId) {
        redirectDOM = <Redirect to={`/?taskId=${currentTaskId}`} />;
      } else if (tasks[0] && tasks[0].taskId) {
        redirectDOM = <Redirect to={`/?taskId=${tasks[0].taskId}`} />;
      }
    }
  }

  const dispatch = useDispatch();

  if (searchParams.get('taskId')) {
    dispatch(changeCurrentTaskId(searchParams.get('taskId') as string));
  }

  return (
    <>
      {redirectDOM}
      <WorkCountdownMain tasks={tasks} selectedTaskId={searchParams.get('taskId')} />
    </>
  );
}
