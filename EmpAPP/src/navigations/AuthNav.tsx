import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screens/AuthScreens/Login';

const AuthNav = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNav;
