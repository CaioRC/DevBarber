import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import UseContextProvider from './src/contexts/UserContext';
import MainStack from './src/stacks/MainStack';

class App extends Component {
  render() {
    return (
      <UseContextProvider>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </UseContextProvider>
    );
  }
}

export default App;
