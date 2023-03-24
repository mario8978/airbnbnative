import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Home,
} from '../pages';

const { Navigator, Screen } = createStackNavigator();

const AppRoutes: React.FC = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="Home" component={Home} />
  </Navigator>
);

export default AppRoutes;
