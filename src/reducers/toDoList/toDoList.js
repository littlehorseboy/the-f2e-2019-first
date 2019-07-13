import { CHANGE_STATUS } from '../../actions/toDoList/toDoList';

const initState = {
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
      taskName: 'the First thing to do today',
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

const reducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_STATUS:
      return {
        ...state,
        status: action.payload.status,
      };
    default:
      return state;
  }
};

export default reducer;
