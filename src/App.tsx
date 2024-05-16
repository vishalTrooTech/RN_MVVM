import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogBox, SafeAreaView} from 'react-native';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import AppNavigator from './navigators/AppNavigator';
import {store} from './store/configureStore';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
        <Toast />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
