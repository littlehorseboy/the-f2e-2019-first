import { ADD_TASK, CHANGE_TASK_DONE, ToDoListActionI } from '../../actions/toDoList/toDoList';
import { TaskInterface } from '../../pages/WorkCountdown/WorkCountdown';

interface Tasks {
  tasks: TaskInterface[];
}

const initState: Tasks = {
  tasks: [
    {
      taskId: '1',
      taskName: 'the First thing to do today',
      workCount: 0,
      breakCount: 0,
      done: false,
      doneTime: new Date(2019, 7, 3),
    },
    {
      taskId: '2',
      taskName: 'the second thing to do today',
      workCount: 0,
      breakCount: 0,
      done: false,
      doneTime: new Date(2019, 7, 4),
    },
    {
      taskId: '3',
      taskName: 'the third thing to do today',
      workCount: 0,
      breakCount: 0,
      done: false,
      doneTime: new Date(2019, 7, 7),
    },
    {
      taskId: '4',
      taskName: 'the forth thing to do today',
      workCount: 0,
      breakCount: 0,
      done: false,
      doneTime: new Date(2019, 7, 9),
    },
  ],
};

const reducer = (state = initState, action: ToDoListActionI): Tasks => {
  const changeTaskDone = (): Tasks => {
    const findTask = state.tasks
      .find((task): boolean => task.taskId === action.payload.task.taskId);
    if (!findTask) {
      return state;
    }
    state.tasks.splice(
      state.tasks.findIndex((task): boolean => task.taskId === action.payload.task.taskId),
      1,
      Object.assign(
        findTask,
        { done: !findTask.done },
      ),
    );
    return state;
  };

  switch (action.type) {
    case ADD_TASK:
      return {
        tasks: [
          ...state.tasks,
          action.payload.task,
        ],
      };
    case CHANGE_TASK_DONE:
      return {
        tasks: [
          ...changeTaskDone().tasks,
        ],
      };
    default:
      return state;
  }
};

export default reducer;
