import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/Login/LoginScreen';
import { TasksScreen } from '../screens/products/TasksScreen';
import { AddTaskScreen } from '../screens/addtask/AddTaskScreen';
import { ProductScreen } from '../screens/products/ProductScreen';




export type RootStackParams = {
  Login: undefined,
  Task: { id: number, name: string },
  Tasks: undefined,
  AddTask: undefined,
}

const Stack = createStackNavigator<RootStackParams>();



export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={ {
      headerShown: true,
      headerStyle: {
        elevation: 0,
        shadowColor: 'transparent'
      }
    } }>
      <Stack.Screen name="Login" component={ LoginScreen } />
      
      <Stack.Screen name="Task" component={ ProductScreen } />
      <Stack.Screen name="Tasks" component={ TasksScreen } />

      <Stack.Screen name="AddTask" component={ AddTaskScreen } />
    </Stack.Navigator>
  );
};