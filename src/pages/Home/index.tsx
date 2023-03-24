import React from 'react';
import { Text } from 'react-native';
import { Screen } from '../../components';
import { View } from './style';

const Home: React.FC = () => (
  <Screen>
    <View>
      <Text>React Native Boilerplate</Text>
      <Text>
        Made with
        {' '}
        &lt; &#x0002F; &gt;
        {' '}
        and
        {' '}
        &hearts;
        {' '}
        by CITi
      </Text>
    </View>
  </Screen>
);

export default Home;
