
import { Dispatch } from 'redux';
import { ADD_TASK, REMOVE_TASK } from './actionTypes';
import { Task } from './initialState';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type TaskActionTypes = AddTaskAction | RemoveTaskAction;

export type AddTaskAction = {
  type: typeof ADD_TASK;
  payload: Task;
}

export interface RemoveTaskAction {
  type: typeof REMOVE_TASK;
  payload: number; 
}

export const addTask = (task: Task) => {
  return async (dispatch: Dispatch) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(task));

      dispatch({ type: ADD_TASK, payload: task });
    } catch (error) {
      console.log('Error al guardar la tarea en AsyncStorage:', error);
    }
  };
};

export const removeTask = (taskId: number): RemoveTaskAction => ({
  type: REMOVE_TASK,
  payload: taskId,
});
