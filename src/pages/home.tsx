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

const myIcon = <Icon name="home" size={20} color="green" />;

const showToast = () => {
  return ToastAndroid.show("Clicked", ToastAndroid.SHORT);
};

const Home = () => {
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

  const [fontsLoaded] = useFonts({
    "Kalam-Regular": require("../../assets/fonts/Kalam-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <StatusBar backgroundColor="black" />
      <ScrollView
        contentContainerStyle={{
          padding: 10,
          height: "100%",
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={getQuotes} />
        }
      >
        <View style={UniversalStyles.quoteBlock}>
          {apiData ? (
            <View>
              <Text style={UniversalStyles.quoteText}>{apiData.text}</Text>
              <Text style={UniversalStyles.authorText}>- {apiData.author}</Text>
            </View>
          ) : null}
        </View>
        <TouchableOpacity onPress={showToast}>
          <Text>home</Text>
        </TouchableOpacity>
        <Text style={{ fontFamily: "Kalam-Regular", fontSize: 20 }}>
          Font test
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
