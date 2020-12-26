import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { CreateScreen } from '../screens/CreateScreen';
import { BookmarkedScreen } from '../screens/BookmarkedScreen';
import { THEME } from '../theme';

const navigatorOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
        },
        headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
    },
};

const PostNavigator = createStackNavigator(
    {
        Main: MainScreen,
        Post: PostScreen,
    },
    navigatorOptions
);

const BookedNavigator = createStackNavigator(
    {
        Bookmarked: BookmarkedScreen,
        Post: PostScreen,
    },
    navigatorOptions
);

const bottomTabsConfig = {
    Post: {
        screen: PostNavigator,
        navigationOptions: {
            tabBarLabel: 'All',
            tabBarIcon: (info) => <Ionicons name='ios-albums' size={25} color={info.tintColor} />,
        },
    },
    Bookmarked: {
        screen: BookedNavigator,
        navigationOptions: {
            tabBarLabel: 'Bookmarked',
            tabBarIcon: (info) => <Ionicons name='ios-star' size={25} color={info.tintColor} />,
        },
    },
};

const BottomNavigator =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(bottomTabsConfig, {
              activeTintColor: '#fff',
              shifting: true,
              barStyle: {
                  backgroundColor: THEME.MAIN_COLOR,
              },
          })
        : createBottomTabNavigator(bottomTabsConfig, {
              tabBarOptions: {
                  activeTintColor: THEME.MAIN_COLOR,
              },
          });

const MainNavigator = createDrawerNavigator({
    PostsTabs: {
        screen: BottomNavigator
    },
    About: AboutScreen,
    Create: CreateScreen,
});

export const AppNavigation = createAppContainer(MainNavigator);
