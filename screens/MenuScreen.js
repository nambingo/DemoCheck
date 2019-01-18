import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Linking,
  TouchableWithoutFeedback,
  StatusBar
} from "react-native";
export default class MEnuSCreen extends Component {
  state = {};
  // static navigationOptions = ({ navigation }) => {
  //   const { params = {} } = navigation.state;
  //   let tabBarIcon = () => (
      // <Image
      //   source={require("../images/ic_menu.png")}
      //   style={{ width: 26, height: 22 }}
      // />
  //   );
  //   return { tabBarIcon };
  // };
  _onPressHome = () => {
    Linking.openURL("http://vnptcheck.vn");
  };
  _onPressRule = () => {
    this.props.navigation.navigate("Rule");
  };
  _onPressTutorial = () => {
    this.props.navigation.navigate("Tutorial");
  };
  _onPressLogOut = () => {
    this.props.navigation.navigate("LogOut");
  };
  _onPressLogIn = () => {
    this.props.navigation.navigate("Login");
  };
  

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
          <Text style={[styles.titleToolbar]}>Thông tin chung</Text>
        </View>
        <TouchableWithoutFeedback onPress={this._onPressHome}>
          <View style={[styles.itemView]}>
            <View style={[styles.leftContainer]}>
              <Image
                style={{
                  marginLeft: 10,
                  width: 25,
                  height: 25
                }}
                source={require("../images/ic_home.png")}
              />
              <Text style={styles.itemText}>Trang chủ</Text>
            </View>
            <Image
              style={styles.rightContainer}
              source={require("../images/ic_three_dot.png")}
            />
          </View>
        </TouchableWithoutFeedback>

        <View style={[styles.viewLine]} />
        <View style={[styles.itemView]}>
          <View style={[styles.leftContainer]}>
            <Image
              style={{
                marginLeft: 10,
                width: 25,
                height: 25
              }}
              source={require("../images/ic_setting.png")}
            />
            <Text style={styles.itemText}>Thông tin ứng dụng</Text>
          </View>
          <Image
            style={styles.rightContainer}
            source={require("../images/ic_three_dot.png")}
          />
        </View>
        <View style={[styles.viewLine]} />
        <TouchableWithoutFeedback onPress={this._onPressRule}>
          <View style={[styles.itemView]}>
            <View style={[styles.leftContainer]}>
              <Image
                style={{
                  marginLeft: 10,
                  width: 25,
                  height: 25
                }}
                source={require("../images/ic_info.png")}
              />
              <Text style={styles.itemText}>Điều khoản sử dụng</Text>
            </View>
            <Image
              style={styles.rightContainer}
              source={require("../images/ic_three_dot.png")}
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={[styles.viewLine]} />
        <TouchableWithoutFeedback onPress={this._onPressTutorial}>
          <View style={[styles.itemView]}>
            <View style={[styles.leftContainer]}>
              <Image
                style={{
                  marginLeft: 10,
                  width: 30,
                  height: 20
                }}
                source={require("../images/ic_book_3.png")}
              />
              <Text
                style={{
                  color: "black",
                  fontSize: 16,
                  alignSelf: "center",
                  marginLeft: 17
                }}
              >
                Hướng dẫn sử dụng
              </Text>
            </View>
            <Image
              style={styles.rightContainer}
              source={require("../images/ic_three_dot.png")}
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={[styles.viewLine]} />
        <TouchableWithoutFeedback onPress={this._onPressLogIn}>
          <View style={[styles.itemView]}>
            <View style={[styles.leftContainer]}>
              <Image
                style={{
                  marginLeft: 10,
                  width: 25,
                  height: 25
                }}
                source={require("../images/ic_signin.png")}
              />
              <Text style={styles.itemText}>Đăng nhập</Text>
            </View>
            <Image
              style={styles.rightContainer}
              source={require("../images/ic_three_dot.png")}
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={[styles.viewLine]} />
        <TouchableWithoutFeedback onPress={this._onPressLogOut}>
          <View style={[styles.itemView]}>
            <View style={[styles.leftContainer]}>
              <Image
                style={{
                  marginLeft: 10,
                  width: 25,
                  height: 25
                }}
                source={require("../images/ic_signin.png")}
              />
              <Text style={styles.itemText}>Đăng xuất</Text>
            </View>
            <Image
              style={styles.rightContainer}
              source={require("../images/ic_three_dot.png")}
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={[styles.viewLine]} />
        <Image
          style={{ flex: 1, height: undefined, width: undefined }}
          resizeMode='cover'
          source={require("../images/bg_menu.png")}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column"
  },
  itemView: {
    height: "11%",
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  leftContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  rightContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 10,
    width: 7,
    height: 30
  },
  toolbar: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    alignItems: "center"
  },
  itemText: {
    color: "black",
    fontSize: 16,
    alignSelf: "center",
    marginLeft: 20
  },
  titleToolbar: {
    marginLeft: 16,
    color: "white",
    fontWeight: "normal",
    fontSize: 18
  },
  viewLine: {
    height: 0.4,
    backgroundColor: "black"
  }
});
