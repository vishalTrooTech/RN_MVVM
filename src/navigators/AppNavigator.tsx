import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Form} from '../screens/Form';
import {Home} from '../screens/Home';
import {PostDetails} from '../screens/PostDetails';
import {ScreenNames} from './ScreenNames';

const commonNavOption = {
  headerShown: false,
  gestureEnabled: false,
};

function AppNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName={ScreenNames.Home}>
      <Stack.Screen
        name={ScreenNames.Home}
        component={Home}
        options={commonNavOption}
      />
      <Stack.Screen
        name={ScreenNames.PostDetails}
        component={PostDetails}
        options={commonNavOption}
      />
      <Stack.Screen
        name={ScreenNames.Form}
        component={Form}
        options={{...commonNavOption, headerShown: true}}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
