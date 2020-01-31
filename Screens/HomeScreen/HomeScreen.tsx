import React from 'react';
import {View, Text} from 'react-native';

export interface IHomeScreenProps {}

const HomeScreen: React.FC<IHomeScreenProps> = ({}) => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
