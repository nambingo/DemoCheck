import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar
} from "react-native";
export default class HIstorySCreen extends Component {
  state = {};
  // static navigationOptions = ({ navigation }) => {
  //   const { params = {} } = navigation.state;
  //   let tabBarIcon = () => (
  //     <Image
  //       source={require('../images/ic_history.png')}
  //       style={{ width: 26, height: 22 }}
  //     />
  //   );
  //   return { tabBarIcon };
  // };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar />
        {/* toolbar */}
        <View style={[styles.toolbar, { backgroundColor: "#0368d0" }]}>
          <Image
            style={{
              marginLeft: 10,
              width: 20,
              height: 20
            }}
            source={require("../images/ic_menu.png")}
          />
          <Text style={[styles.titleToolbar]}>Lịch sử</Text>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      flexDirection: "row"
    },
    toolbar: {
      width:'100%',
      height: 70,
      flexDirection: "row",
      alignItems: "center"
    },
    titleToolbar: {
      marginLeft: 16,
      color: "white",
      fontWeight: "normal",
      fontSize: 18
    }
  });
