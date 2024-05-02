
import React from 'react';
import User from './HomeScreens/User';
import AddEmployee from './HomeScreens/AddEmployee';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="User" component={User} />
      <Tab.Screen name="AddEmployee" component={AddEmployee} />
    </Tab.Navigator>
  );
};

export default Home;
