import { Text, View } from 'react-native';
import { type NavigationProp, useNavigation } from '@react-navigation/native';

import { globalStyles } from '../../theme/theme';
import { FlatList } from 'react-native-gesture-handler';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { type RootStackParams } from '../../routes/StackNavigator';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/tasks/initialState';


const products = [
  { id: 1, name: 'Task 1' },
  { id: 2, name: 'Task 2' },
  { id: 3, name: 'Task 3' },
];


export const TasksScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const tasks = useSelector( ( state: RootState ) => state.tasks );


  return (
    <View style={ globalStyles.container }>
      <Text style={ { marginBottom: 10, fontSize: 30 } }>Tareas</Text>

      <FlatList
        data={ tasks }
        renderItem={ ( { item } ) => (
          <PrimaryButton
            onPress={ () => navigation.navigate('Task', { id: item.id, name: item.name }) }
            label={ item.name }
          />
        ) }
      />


      <Text style={ { marginBottom: 10, fontSize: 30 } }>Agregar task</Text>
        
      <PrimaryButton 
        onPress={ () => navigation.navigate('AddTask') }
        label="Add"
      />

    </View>
  );
};