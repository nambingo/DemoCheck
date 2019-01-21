/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator
} from "react-navigation";
import ScanScreen from "./src/screens/ScanScreen";
import HistoryScreen from "./src/screens/HistoryScreen";
import MenuScreen from "./src/screens/MenuScreen";
import RuleScreen from "./src/screens/RuleScreen";
import TutorialScreen from "./src/screens/TutorialScreen";
// import Login2Container from "./src/containers/Login2Container";
import ScanQRScreen from "./src/screens/ScanQRScreen";
import {Provider} from "react-redux";
import NavigationService from "./src/service/NavigationService";
import {store} from "./src/redux/configureStore";
import LoginScreen2 from "./src/screens/LoginScreen2";

const ScanStack = createStackNavigator(
    {
        Scan: { screen: ScanScreen },
        ScanQR1: { screen: ScanQRScreen }
    },
    {
        headerMode: "none",
        mode: "card",
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
        Login: { screen: LoginScreen2 }
    },
    {
        headerMode: "none",
        mode: "card",
        defaultNavigationOptions: {
            gesturesEnabled: false
        }
    }
);

MenuStack.navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <MaterialIcons
            style={{ backgroundColor: "transparent" }}
            name={"list"}
            color={tintColor}
            size={24}
        />
    ),
    tabBarVisible: ({isVisible}) => {
        if (navigation.state.index > 0) {
            isVisible = false;
        } else {
            isVisible: true;
        }
    }
};

ScanStack.navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Image
            source={require("./src/images/ic_qrcode.png")}
            style={{ width: 20, height: 20 }}
        />
    )
};

HistoryScreen.navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <MaterialIcons
            style={{ backgroundColor: "transparent" }}
            name={"history"}
            color={tintColor}
            size={24}
        />
    )
};

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
export const AppContainer = createAppContainer(BottomTabMaterial);

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <AppContainer
                    ref={(navigatorRef) => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }}
                />
            </Provider>
        )
    }

}