import { TaskInterface } from '../../pages/WorkCountdown/WorkCountdown';

export const ADD_TASK = 'ADD_TASK';

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
