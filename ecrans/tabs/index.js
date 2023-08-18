import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useSelector} from 'react-redux';
import Home from '../Home';
import Messages from '../Messages';
import Settings from '../Setting';
import Login from '../Login';

const Tab = createMaterialBottomTabNavigator();
const BottomTabs = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  // console.log('isAuthenticated:', isAuthenticated);
  return (
    <Tab.Navigator
      initialRouteName="tab_home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
      }}>
      {isAuthenticated ? (
        <>
          <Tab.Screen
            name="tabs_home"
            component={Home}
            options={{
              tabBarLabel: 'Dashboard',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="messages"
            component={Messages}
            options={{
              tabBarLabel: 'Messages',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="chat" color={color} size={size} />
              ),
              // tabBarBadge: 3, // Affiche le nombre des messages
            }}
          />
          <Tab.Screen
            name="settings"
            component={Settings}
            options={{
              tabBarLabel: 'Paramètre',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="account-settings-outline"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </>
      ) : (
        <Tab.Screen
          name="login"
          component={Login}
          options={{
            tabBarLabel: 'Connexion',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="login" color={color} size={size} />
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );
};

export default BottomTabs;
