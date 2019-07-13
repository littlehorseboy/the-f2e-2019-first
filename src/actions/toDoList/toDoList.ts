import { TaskInterface } from '../../pages/WorkCountdown/WorkCountdown';

export const ADD_TASK = 'ADD_TASK';
export const CHANGE_TASK_DONE = 'CHANGE_TASK_DONE';

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
