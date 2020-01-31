import React from 'react';
import HomeScreen from '../Screens/HomeScreen';
import SignInScreen from '../Screens/SignInScreen';
import {NavigationNativeContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export interface IAppNavigationProps {}

const Stack = createStackNavigator();

const AppNavigation: React.FC<IAppNavigationProps> = ({}) => {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
};

export default AppNavigation;
