import React, {Component} from "react";
import {FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";

interface Props {
    loading: boolean
    data: any
    message: any
    error: boolean

    getHistory(): void
}

interface State {
}

export default class HistoryScreen extends Component<Props, State> {
    componentDidMount(): void {
        console.log('componentDidMount ')
        this.props.getHistory();
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar/>
                {/* toolbar */}
                <View style={[styles.toolbar, {backgroundColor: "#0368d0"}]}>
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
                <View style={{flex: 1}}>
                    {this.renderHistory(this.props.data)}
                </View>
            </SafeAreaView>
        );
    }

    renderHistory = (data: any) => {
        console.log('data------------' + JSON.stringify(data))
        if ((data && data.length > 0)) {
            return (<FlatList data={data} renderItem={this.renderItemHistory}/>)
        } else {
            return (
                <View style={{alignItems:'center' , marginTop :20}}>
                    <Text>Không có dữ liệu </Text>
                </View>
            )
        }
    }

    renderItemHistory = (item: any) => {
        console.log('xxxxxxxxxx' + JSON.stringify(item))
        return (
            <TouchableOpacity>
                <View style={{
                    marginTop: 5,
                    marginBottom: 15,
                    height: 100,
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>
                    <View style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: 'flex-start',
                        alignItems: 'stretch',
                        height: '100%',
                    }}>
                        <Image
                            style={{
                                marginStart: 10,
                                alignSelf: 'center',
                                height: 50,
                                width: 50
                            }}
                            source={require("../images/ic_home.png")}
                        />
                        <View style={{flexDirection: 'column', flex: 1, marginStart: 10}}>
                            <Text numberOfLines={1} ellipsizeMode='tail'
                                  style={{flex: 1, fontSize: 20, color: '#000000', fontWeight: "bold"}}>xxxx</Text>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                                <Text style={{fontSize: 16, width: 80, color: '#000000'}}>Mã SP</Text>
                                <Text numberOfLines={1} ellipsizeMode='tail'
                                      style={{fontSize: 16, color: '#0174DF'}}>eewww</Text>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                                <Text style={{width: 80, fontSize: 16, color: '#000000'}}>Nhà SX</Text>
                                <Text numberOfLines={1} ellipsizeMode='tail'
                                      style={{fontSize: 16, color: '#848484'}}>eewww</Text>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                                <Text style={{width: 80, fontSize: 16, color: '#000000'}}>Thời gian</Text>
                                <Text numberOfLines={1} ellipsizeMode='tail'
                                      style={{fontSize: 16, color: '#848484'}}>eewww</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{height: '100%', width: 10, marginEnd: 10}}>
                        <Image
                            style={styles.rightContainer}
                            source={require("../images/ic_three_dot.png")}
                        />
                    </View>
                </View>
                <View style={{
                    opacity: 0.3,
                    height: 0.4,
                    backgroundColor: "black"
                }}/>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
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
    itemText: {
        color: "black",
        fontSize: 16,
        alignSelf: "center",
        marginLeft: 20
    },
    itemView: {},
    container: {
        flex: 1,
        backgroundColor: "white",
        flexDirection: "column"
    },
    toolbar: {
        width: '100%',
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
