import { Text, View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';
import { addTask, AddTaskAction } from '../../../redux/tasks/actions';
import { Task } from '../../../redux/tasks/initialState';
import { type RootStackParams } from '../../routes/StackNavigator';
import { AnyAction } from 'redux';

export const AddTaskScreen = () => {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const navigator = useNavigation();

  const handleAddTask = () => {
    if (taskName.trim() !== '') {
      const newTask: Task = {
        id: Math.random(),
        name: taskName,
      };
      dispatch<any>(addTask(newTask));
      setTaskName('');
      navigation.navigate('Tasks');
    }
  };

  


  return (
    <View style={ globalStyles.container }>
      
      <Text style={{ marginBottom: 10 }}>Agregar tarea</Text>

      <TextInput
        style={globalStyles.TextInput}
        placeholder="Nombre de la tarea"
        value={taskName}
        onChangeText={text => setTaskName(text)}
      />
      <PrimaryButton label="Agregar tarea" onPress={handleAddTask} />

      <PrimaryButton 
        label="Cancelar"
        onPress={ () =>  navigator.goBack() } 
      />




    </View>
  )
}