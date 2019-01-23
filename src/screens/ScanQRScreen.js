import React, { Component  } from "react";

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  TouchableWithoutFeedback,
  Image,
  View,
  SafeAreaView,
  StatusBar,
  Platform
} from "react-native";

import QRCodeScanner from "react-native-qrcode-scanner";
export default class ScanQRScreen extends Component {
  _onGoBack = () => {
    this.props.navigation.goBack();
  };
  onSuccess(e) {
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
  }

  // render() {
  //   return (
  //     <NavigatorIOS
  //       initialRoute={{
  //         component: QRCodeScanner,
  //         title: 'Scan Code',
  //         passProps: {
  //           onRead: this.onSuccess.bind(this),
  //           cameraStyle: styles.cameraContainer,
  //           topViewStyle: styles.zeroContainer,
  //           bottomViewStyle: styles.zeroContainer,
  //         }
  //       }}
  //       style={{flex: 1}}
  //     />
  //   )
  // }
  render() {
    console.log('--------------')
    let checkAndroidPermission = true
    if (Platform.OS === 'android' && Platform.Version < 23) {
      checkAndroidPermission = false
    }
    console.log('--------------' +checkAndroidPermission)

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar />
      <View style={[styles.toolbar, { backgroundColor: "#0368d0" }]}>
        <TouchableWithoutFeedback onPress={this._onGoBack}>
          <Image
            style={{
              marginLeft: 10,
              width: 20,
              height: 20
            }}
            source={require("../images/ic_left_back.png")}
          />
          </TouchableWithoutFeedback>
          <Text style={[styles.titleToolbar]}>Scan QR code</Text>
        </View>
      <QRCodeScanner
          cameraProps={{captureAudio: false}}
          checkAndroid6Permissions={checkAndroidPermission}
        onRead={this.onSuccess.bind(this)}
      />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  // zeroContainer: {
  //   height: 0,
  //   flex: 0,
  // },

  // cameraContainer: {
  //   height: Dimensions.get('window').height,
  // },
  titleToolbar: {
    marginLeft: 16,
    color: "white",
    fontWeight: "normal",
    fontSize: 18
  },
  toolbar: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    alignItems: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column"
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});