/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import ScanScreen from './screens/ScanScreen';
import HistoryScreen from "./screens/HistoryScreen";
import MenuScreen from "./screens/MenuScreen";
import RuleScreen from "./screens/RuleScreen";
import TutorialScreen from "./screens/TutorialScreen";
import LoginScreen from "./screens/LoginScreen";
import ScanQRScreen from "./screens/ScanQRScreen";

const ScanStack = createStackNavigator({
  Scan: ScanScreen,
  ScanQR1: ScanQRScreen
});

const MenuStack = createStackNavigator({
  Menu: MenuScreen,
  Rule: RuleScreen,
  Tutorial: TutorialScreen,
  Login: LoginScreen
});

MenuStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
}
ScanStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
}

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
    },
    // shifting: false,
    activeTintColor: "white",
    activeColor: "white",
    inactiveColor: "white",
    barStyle: {
      backgroundColor: "white",
      borderTopWidth: StyleSheet.hairlineWidth,
      borderStyle: "solid",
      borderColor: "#d0cfd0"
    }
  }
);
export default createAppContainer(BottomTabMaterial);

