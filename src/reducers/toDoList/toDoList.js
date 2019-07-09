import { CHANGE_STATUS } from '../../actions/toDoList/toDoList';

const initState = {
  tasks: [
    {
      taskId: '123',
      taskName: 'the First thing to do today',
      workCount: 0,
      breakCount: 0,
      done: false,
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
