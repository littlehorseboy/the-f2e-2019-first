import { ADD_TASK, ToDoListActionI } from '../../actions/toDoList/toDoList';
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
  switch (action.type) {
    case ADD_TASK:
      return {
        tasks: [
          ...state.tasks,
          action.payload.task,
        ],
      };
    default:
      return state;
  }
};

export default reducer;
