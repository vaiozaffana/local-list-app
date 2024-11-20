import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const AppNav = () => (
  <NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen 
        name="Home" 
        component={HomeStack} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Image 
              source={focused 
                ? require('../assets/images/home-active.png')
                : require('../assets/images/home.png')
              }
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Image 
              source={focused 
                ? require('../assets/images/user-active.png')
                : require('../assets/images/user-inactive.png') 
              }
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNav;
