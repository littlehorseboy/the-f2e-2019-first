export const CHANGE_CURRENT_TASKID = 'CHANGE_CURRENT_TASKID';

export interface ToDoListSelectedActionI {
  type: string;
  payload: {
    taskId: string;
  };
}

export const changeCurrentTaskId = (taskId: string): ToDoListSelectedActionI => ({
  type: CHANGE_CURRENT_TASKID,
  payload: {
    taskId,
  },
});
