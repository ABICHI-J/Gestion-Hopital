import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import store from './redux/store/createStore';
import Routes from './routes/index';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <Routes />
      </View>
    </Provider>
  );
};

export default App;
