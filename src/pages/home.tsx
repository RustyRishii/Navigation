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
//import Icon from "react-native-vector-icons/Ionicons";
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
import Clipboard from "@react-native-clipboard/clipboard";
import Icon from "react-native-vector-icons/Ionicons";
import { useSharedValue } from "react-native-reanimated";

const copyIconFilled = <Icon name="copy" size={30} color="black" />;
const copyIconOutline = <Icon name="copy-outline" size={30} color={"black"} />;

const bookmarkIconOutline = (
  <Icon name="bookmark-outline" size={30} color="black" />
);
const bookmarkIconFilled = <Icon name="bookmark" size={30} color="black" />;

const HomePage = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [apiData, setAPIData] = useState(undefined);
  const [bookmark, setBookmark] = useState(bookmarkIconOutline);
  const [copy, setCopy] = useState(copyIconOutline);

  type apiCall = {
    text: string;
  };
  // function copyCondition() {
  //   if (copy === copyIconOutline) {
  //     setCopy(copyIconFilled);
  //     Clipboard.setString(`${apiData.text} - ${apiData.author}`);
  //     ToastAndroid.show("Copied", ToastAndroid.SHORT);
  //     setTimeout(() => {
  //       setCopy(copyIconOutline);
  //     }, 2000);
  //   }
  // }
  function copyCondition() {
    setCopy(copyIconFilled);
    Clipboard.setString(`${apiData?.text} - ${apiData?.author}`);

    ToastAndroid.show("Copied", ToastAndroid.SHORT);

    // Set copyIconOutline back after 2 seconds
    setTimeout(() => {
      setCopy(copyIconOutline);
    }, 1000);
  }

  function bookmarkCondition() {
    if (bookmark === bookmarkIconOutline) {
      setBookmark(bookmarkIconFilled);
      ToastAndroid.show("Bookmarked", ToastAndroid.SHORT);
    } else {
      setBookmark(bookmarkIconOutline);
      ToastAndroid.show("Bookmark removed", ToastAndroid.SHORT);
    }
  }

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
    setBookmark(bookmarkIconOutline);
    setTimeout(() => {
      setRefreshing(false);
    }, 200);
  }, []);

  useEffect(() => {
    getAPIData();
  }, []);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    ToastAndroid.show("Fading In", ToastAndroid.SHORT);
    Animated.timing(fadeAnim, {
      toValue: 1,
      useNativeDriver: true,
      delay: 0,
      duration: 5000,
    }).start();
  };

  const fadeOut = () => {
    ToastAndroid.show("Fading Out", ToastAndroid.SHORT);
    Animated.timing(fadeAnim, {
      toValue: 0,
      useNativeDriver: true,
      delay: 0,
      duration: 5000,
    }).start();
  };

  const copyToClipboard = () => {
    Clipboard.setString(`${apiData.text} - ${apiData.author}`);
    ToastAndroid.show("Copied", ToastAndroid.SHORT);
  };

  return (
    <SafeAreaView style={{ paddingHorizontal: 5 }}>
      <GestureHandlerRootView>
        <StatusBar backgroundColor="black" />
        <ScrollView
          style={{ height: "100%" }}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={getQuotes} />
          }
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              borderRadius: 10,
              borderWidth: 1,
              marginVertical: 10,
              height: "20%",
              paddingHorizontal: 10,
            }}
          >
            {apiData ? (
              <View>
                <Title3 text={apiData.text} />
                <View style={{ paddingTop: 10, alignItems: "flex-end" }}>
                  <Title3 text={apiData.author} />
                </View>
              </View>
            ) : null}
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Pressable
              style={{ height: 50, width: 50 }}
              onPress={() => {
                copyCondition();
              }}
            >
              {copy}
            </Pressable>
            <Pressable
              style={{ height: 50, width: 50 }}
              onPress={() => {
                bookmarkCondition();
              }}
            >
              {bookmark}
            </Pressable>
          </View>
          <Pressable
            onPress={() => {
              navigation.navigate("Privacy");
            }}
          >
            <Text>Privacy</Text>
          </Pressable>
          <Animated.View style={{ opacity: fadeAnim }}>
            <Text style={UniversalStyles.AnimationText}>Animation</Text>
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
          <Text style={{ fontSize: 50 }}>Text</Text>
          <Text style={{ fontSize: 50 }}>Text</Text>
          <Text style={{ fontSize: 50 }}>Text</Text>
          <Text style={{ fontSize: 50 }}>Text</Text>
          <Text style={{ fontSize: 50 }}>Text</Text>
          <Text style={{ fontSize: 50 }}>Text</Text>
          <Text style={{ fontSize: 50 }}>Text</Text>
          <Text style={{ fontSize: 50 }}>Text</Text>
          <Text style={{ fontSize: 50 }}>Text</Text>
          <Text style={{ fontSize: 50 }}>Text</Text>
          <Text style={{ fontSize: 50 }}>Text</Text>
        </ScrollView>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({});

{
  /* <ScrollView
          style={{ flex: 1 }}
          scrollEnabled={true}
          contentContainerStyle={{
         padding: 10,
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
/*

*/
