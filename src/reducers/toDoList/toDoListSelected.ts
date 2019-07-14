import { CHANGE_CURRENT_TASKID, ToDoListSelectedActionI } from '../../actions/toDoList/toDoListSelected';

interface TaskId {
  taskId: string;
}

const initState: TaskId = {
  taskId: '',
};

const reducer = (state = initState, action: ToDoListSelectedActionI): TaskId => {
  switch (action.type) {
    case CHANGE_CURRENT_TASKID:
      return {
        taskId: action.payload.taskId,
      };
    default:
      return state;
  }
};

export default reducer;
