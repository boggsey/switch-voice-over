/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, Switch} from 'react-native';

const App: () => React$Node = () => {
  return (
    <SafeAreaView>
      <Switch
        accessibilityRole="switch"
        accessibilityLabel="Switch Status"
        value={false}
      />
    </SafeAreaView>
  );
};

export default App;
