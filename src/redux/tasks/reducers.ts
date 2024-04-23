
import { ADD_TASK, REMOVE_TASK } from './actionTypes';
import { TaskActionTypes } from './actions';
import { Task, RootState } from './initialState';

const initialState: RootState = {
  tasks: [],
};

const reducer = (state: RootState = initialState, action: TaskActionTypes): RootState => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task: Task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
