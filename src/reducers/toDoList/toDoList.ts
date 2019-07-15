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
      workCount: 2,
      breakCount: 1,
      done: false,
      doneTime: null,
    },
    {
      taskId: '2',
      taskName: 'the second thing to do today',
      workCount: 1,
      breakCount: 0,
      done: false,
      doneTime: null,
    },
    {
      taskId: '3',
      taskName: 'the third thing to do today',
      workCount: 0,
      breakCount: 0,
      done: false,
      doneTime: null,
    },
    {
      taskId: '4',
      taskName: 'the forth thing to do today',
      workCount: 0,
      breakCount: 0,
      done: false,
      doneTime: null,
    },
    {
      taskId: '5',
      taskName: 'complete the keynote',
      workCount: 5,
      breakCount: 4,
      done: true,
      doneTime: new Date(2019, 6, 7),
    },
    {
      taskId: '6',
      taskName: 'prepare presentation',
      workCount: 3,
      breakCount: 2,
      done: true,
      doneTime: new Date(2019, 6, 9),
    },
    {
      taskId: '7',
      taskName: 'React',
      workCount: 6,
      breakCount: 2,
      done: true,
      doneTime: new Date(),
    },
    {
      taskId: '8',
      taskName: 'Storybook',
      workCount: 1,
      breakCount: 0,
      done: true,
      doneTime: new Date(),
    },
    {
      taskId: '9',
      taskName: 'React Hooks',
      workCount: 4,
      breakCount: 3,
      done: true,
      doneTime: new Date(2019, 6, 13),
    },
    {
      taskId: '10',
      taskName: 'TypeScript',
      workCount: 4,
      breakCount: 3,
      done: true,
      doneTime: new Date(2019, 6, 3),
    },
    {
      taskId: '11',
      taskName: 'Material-UI',
      workCount: 2,
      breakCount: 1,
      done: true,
      doneTime: new Date(2019, 6, 3),
    },
    {
      taskId: '12',
      taskName: 'React Testing Library',
      workCount: 2,
      breakCount: 1,
      done: true,
      doneTime: new Date(2019, 6, 3),
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
