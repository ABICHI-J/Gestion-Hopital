import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from '../ecrans/tabs/index';
import Register from '../ecrans/Register';
import Login from '../ecrans/Login';
import MessageDetails from '../ecrans/MessageDetails';
import UpdateNameEmail from '../composantes/UpdateNameEmail';
import UpdatePassword from '../composantes/UpdatePassword';
import UpdatePhoto from '../composantes/UpdatePhoto';
const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={BottomTabs} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="UpdateNameEmail" component={UpdateNameEmail} />
        <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
        <Stack.Screen name="UpdatePhoto" component={UpdatePhoto} />

        <Stack.Screen
          name="MessageDetails"
          component={MessageDetails}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
