import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { DrawerNavigator} from './GenbiNavigator';

const MainNavigator = props => {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
};

export default MainNavigator;
