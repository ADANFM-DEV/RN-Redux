import { Pressable, Text, View } from 'react-native';
import { useEffect } from 'react';
import { type NavigationProp, useNavigation, DrawerActions } from '@react-navigation/native';

import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import type { RootStackParams } from '../../routes/StackNavigator';
import { TextInput } from 'react-native-gesture-handler';


export const LoginScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  


  return (
    <View style={ globalStyles.container }>
      <TextInput style={globalStyles.TextInput} placeholder="Username"></TextInput>
      <TextInput style={globalStyles.TextInput} placeholder="Password"></TextInput>      
      <PrimaryButton 
        onPress={ () => navigation.navigate('Tasks')  }
        label="Login"
      />


    </View>
  )
}