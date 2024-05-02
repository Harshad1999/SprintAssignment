import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../Screens/mainScreens/Home';
import AllEmp from '../../Screens/mainScreens/AllEmp';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon(_props) {
            return <FontAwesome name="home" size={24} color="black" />;
          },
          tabBarItemStyle: {
            padding: 10,
          },
          tabBarLabel: 'Home',
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon(_props) {
            return <FontAwesome name="users" size={24} color="black" />;
          },
          tabBarItemStyle: {
            padding: 10,
          },

          tabBarLabel: 'Employees',
        }}
        name="AllEmp"
        component={AllEmp}
      />
    </Tab.Navigator>
  );
};

export default HomeStack;
