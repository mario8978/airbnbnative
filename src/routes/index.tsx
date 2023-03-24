import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './AppRoutes';

const Routes: React.FC = () => (
  <NavigationContainer>
    <AppRoutes />
  </NavigationContainer>
);

export default Routes;
