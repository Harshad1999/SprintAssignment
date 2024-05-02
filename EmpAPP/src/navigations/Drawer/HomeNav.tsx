import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import Help from '../../Screens/DrawerScreens/Help';

const Drawer = createDrawerNavigator();

const HomeNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Help" component={Help} />
    </Drawer.Navigator>
  );
};

export default HomeNav;
