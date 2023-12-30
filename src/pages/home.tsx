import {
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  Pressable,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UniversalStyles from "../styles/universalStyles";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/Ionicons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { InterFamily, KalamFamily } from "../theme";
import { Inter_400Regular } from "@expo-google-fonts/inter";
import {
  Callout,
  Headline,
  SubheadlineBold,
  SubheadlineSemiBold,
  Title1,
  Title1Bold,
  Title2,
  Title3,
  TitleLarge,
  TitleLargeBold,
} from "../typography";
import { NavigationContainer } from "@react-navigation/native";
import Tweet from "./tweet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const myIcon = <Icon name="home" size={20} color="green" />;

const showToast = () => {
  return ToastAndroid.show("Clicked", ToastAndroid.SHORT);
};

const HomePage = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [apiData, setAPIData] = useState(undefined);

  const url = "https://stoic-quotes.com/api/quote";

  const getAPIData = async () => {
    let urlResult = await fetch(url);
    let myData = await urlResult.json();
    setAPIData(myData);
    console.log(myData);
  };

  const getQuotes = useCallback(() => {
    setRefreshing(true);
    getAPIData();
    setTimeout(() => {
      setRefreshing(false);
    }, 200);
  }, []);

  useEffect(() => {
    getAPIData();
  }, []);

  // const [fontsLoaded] = useFonts({
  //   "Kalam-Regular": require("../../assets/fonts/Kalam-Regular.ttf"),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  //const screenHeight = Dimensions.get("window").height;
  return (
    <GestureHandlerRootView style={{ flex: 1, padding: 5 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          scrollEnabled={true}
          contentContainerStyle={
            {
              // padding: 10,
              // flex: 1,
            }
          }
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={getQuotes} />
          }
        >
          <StatusBar backgroundColor="black" />
          <View style={UniversalStyles.quoteBlock}>
            {apiData ? (
              <View>
                <Title3 text={apiData.text} />
                <View style={{ paddingVertical: 10, alignItems: "flex-end" }}>
                  <Title3 text={apiData.author} />
                </View>
              </View>
            ) : null}
          </View>
          <Pressable onPress={() => navigation.navigate("Privacy")}>
            <Text>Privacy</Text>
          </Pressable>
          <Icon name="home" color="green" size={500} />
          <Icon name="home" color="green" size={500} />
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
