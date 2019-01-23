import {AsyncStorage} from "react-native";

export async function setAccessToken(val: string) {
    return await AsyncStorage.setItem("accessToken", val);
}

export async function getAccessToken(): Promise<any> {
    try {
        return await AsyncStorage.getItem("accessToken");
    } catch (e) {
        console.log(e);
        await clearAccessToken();
        return null;
    }
}

export async function clearAccessToken() {
    AsyncStorage.removeItem("accessToken");
}