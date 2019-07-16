import { TaskInterface } from '../../pages/WorkCountdown/WorkCountdown';

export const ADD_TASK = 'ADD_TASK';
export const CHANGE_TASK_DONE = 'CHANGE_TASK_DONE';
export const INCREASE_TASK_WORKCOUNT = 'INCREASE_TASK_WORKCOUNT';

export interface ToDoListActionI {
  type: string;
  payload: {
    task: TaskInterface;
  };
}

export const addTask = (task: TaskInterface): ToDoListActionI => ({
  type: ADD_TASK,
  payload: {
    task,
  },
});

export const changeTaskDone = (task: TaskInterface): ToDoListActionI => ({
  type: CHANGE_TASK_DONE,
  payload: {
    task,
  },
});

export const increaseTaskWorkCount = (task: TaskInterface): ToDoListActionI => ({
  type: INCREASE_TASK_WORKCOUNT,
  payload: {
    task,
  },
});
