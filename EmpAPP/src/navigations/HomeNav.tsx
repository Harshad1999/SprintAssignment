import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../Screens/HomeScreens/Home';
import AllEmp from '../Screens/HomeScreens/AllEmp';

const Drawer = createDrawerNavigator();

const HomeNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="AllEmp" component={AllEmp} />
    </Drawer.Navigator>
  );
};

export default HomeNav;
