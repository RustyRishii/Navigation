import {
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  TouchableOpacity,
  Animated,
  ScrollView,
  RefreshControl,
  Pressable,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
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
import * as Haptics from "expo-haptics";

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

  // useEffect(() => {
  //   getAPIData();
  // }, []);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      useNativeDriver: true,
      delay: 0,
      duration: 5000,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      useNativeDriver: true,
      delay: 0,
      duration: 5000,
    }).start();
  };

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        paddingHorizontal: 5,
        backgroundColor: "cornflowerblue",
      }}
    >
      <StatusBar backgroundColor="black" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={getQuotes} />
          }
        >
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
          <Pressable
            onPress={() => {
              navigation.navigate("Privacy");
              Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Success
              );
            }}
          >
            <Text>Privacy</Text>
          </Pressable>
          <Animated.View style={{ opacity: fadeAnim }}>
            <Text
              style={{
                fontSize: 52,
                borderRadius: 10,
                borderWidth: 1,
                padding: 10,
                color: "white",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              Animation
            </Text>
          </Animated.View>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <Pressable
              onPress={() => {
                fadeIn();
                console.log("FadeIn");
              }}
            >
              <Text>FadeIn</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                fadeOut();
                console.log("FadeOut");
              }}
            >
              <Text>FadeOut</Text>
            </Pressable>
          </View>
          <Text style={{ fontSize: 50 }}>This is a text</Text>
          <Text style={{ fontSize: 50 }}>This is a text</Text>
          <Text style={{ fontSize: 50 }}>This is a text</Text>
          <Text style={{ fontSize: 50 }}>This is a text</Text>
          <Text style={{ fontSize: 50 }}>This is a text</Text>
          <Text style={{ fontSize: 50 }}>This is a text</Text>
          <Text style={{ fontSize: 50 }}>This is a text</Text>
          <Text style={{ fontSize: 50 }}>This is a text</Text>
          <Text style={{ fontSize: 50 }}>This is a text</Text>
          <Text style={{ fontSize: 50 }}>This is a text</Text>
          <Text style={{ fontSize: 50 }}>This is a text</Text>
          <Text style={{ fontSize: 50 }}>This is a text</Text>
          <Text style={{ fontSize: 50 }}>This is a text</Text>
          <Text style={{ fontSize: 50 }}>This is a text</Text>
          <Text style={{ fontSize: 50 }}>This is a text</Text>
          <Text style={{ fontSize: 50 }}>This is a text</Text>
          <Text style={{ fontSize: 50 }}>This is a text</Text>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default HomePage;

const styles = StyleSheet.create({});

{
  /* <ScrollView
          style={{ flex: 1 }}
          scrollEnabled={true}
          contentContainerStyle={{
            // padding: 10,
            flex: 1,
          }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={getQuotes} />
          }
        >
          <View style={UniversalStyles.quoteBlock}>
            {apiData ? (
              <View>
                <Title3 text={apiData.text} />
                <View style={{ paddingVertical: 10, alignItems: "flex-end" }}>
                  <Title3 text={apiData.author} />
                </View>
              </View>
            ) : null}
          </View><View style={UniversalStyles.quoteBlock}>
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
          
        </ScrollView> */
}
