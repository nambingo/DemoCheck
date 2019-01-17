/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import ScanScreen from "./screens/ScanScreen";
import HistoryScreen from "./screens/HistoryScreen";
import MenuScreen from "./screens/MenuScreen";
import RuleScreen from "./screens/RuleScreen";
import TutorialScreen from "./screens/TutorialScreen";
import LoginScreen from "./screens/LoginScreen";
import ScanQRScreen from "./screens/ScanQRScreen";

const ScanStack = createStackNavigator(
  {
    Scan: { screen: ScanScreen },
    ScanQR1: { screen: ScanQRScreen }
  },
  {
    headerMode: "none",
    mode: 'card',
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
);

const MenuStack = createStackNavigator(
  {
    Menu: { screen: MenuScreen },
    Rule: { screen: RuleScreen },
    Tutorial: { screen: TutorialScreen },
    Login: { screen: LoginScreen }
  },
  {
    headerMode: 'none',
    mode: 'card',
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
);

// MenuStack.navigationOptions = ({navigation}) => {
//   let tabBarVisible = true;
//   if (navigation.state.index > 0) {
//     tabBarVisible = false;
//   }
//   return {
//     tabBarVisible,
//   };
// }
// ScanStack.navigationOptions = ({navigation}) => {
//   let tabBarVisible = true;
//   if (navigation.state.index > 0) {
//     tabBarVisible = false;
//   }
//   return {
//     tabBarVisible,
//   };
// }

const BottomTabMaterial = createBottomTabNavigator(
  {
    Scan: {
      screen: ScanStack
    },
    History: {
      screen: HistoryScreen
    },
    Menu: {
      screen: MenuStack
    }
  },
  {
    tabBarOptions: {
      activeBackgroundColor: "#00a219",
      inactiveTintColor: "white",
      activeTintColor: "white",
      showLabel: false,
      showIcon: true,
      style: {
        backgroundColor: "#0a51c5"
      }
    }
  }
);
export default createAppContainer(BottomTabMaterial);
