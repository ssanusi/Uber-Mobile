/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import AppNavigation from './navigation';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'black',
    accent: 'white',
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <AppNavigation />
    </PaperProvider>
  );
};

export default App;
