
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Task {
  id: number;
  name: string;
}

export interface RootState {
  tasks: Task[];
}

const defaultTasks: Task[] = [
  { id: 1, name: 'Task 1' },
  { id: 2, name: 'Task 2' },
  { id: 3, name: 'Task 3' },
];

const initialState: RootState = {
  tasks: defaultTasks,
};

AsyncStorage.getItem('tasks').then((storedTasks) => {
  if (!storedTasks) {
    AsyncStorage.setItem('tasks', JSON.stringify(defaultTasks));
  }
});

export default initialState;
