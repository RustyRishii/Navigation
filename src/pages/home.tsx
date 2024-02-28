import {
  TextInput,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  Animated,
  ScrollView,
  RefreshControl,
  Pressable,
  Button,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UniversalStyles from "../styles/universalStyles";
import { StatusBar } from "expo-status-bar";
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
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Clipboard from "@react-native-clipboard/clipboard";
import Icon from "react-native-vector-icons/Ionicons";
import { AsyncStorageHook } from "@react-native-async-storage/async-storage/lib/typescript/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { tapGestureHandlerProps } from "react-native-gesture-handler/lib/typescript/handlers/TapGestureHandler";

const copyIconFilled = <Icon name="copy" size={30} color="black" />;
const copyIconOutline = <Icon name="copy-outline" size={30} color={"black"} />;

const bookmarkIconOutline = (
  <Icon name="bookmark-outline" size={30} color="black" />
);
const bookmarkIconFilled = <Icon name="bookmark" size={30} color="black" />;

const HomePage = ({ navigation }: { navigation: any }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [apiData, setAPIData] = useState<
    { text: string; author: string } | undefined
  >(undefined);

  //const [apiData, setAPIData] = useState(undefined);
  const [bookmark, setBookmark] = useState(bookmarkIconOutline);
  const [copy, setCopy] = useState(copyIconOutline);

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

  const [quoteAndAuthor, setQuotes] = useState<string>("");

  const setData = async () => {
    await AsyncStorage.setItem("quoteAndAuthor", apiData?.text ?? "");
  };

  const getData = async () => {
    const storedQuote = await AsyncStorage.getItem("quoteAndAuthor");
    setQuotes(storedQuote ?? "");
  };

  useEffect(() => {
    getData();
  });

  return (
    <SafeAreaView style={{ paddingHorizontal: 5 }}>
      <GestureHandlerRootView>
        <StatusBar backgroundColor="black" />
        <ScrollView
          stickyHeaderHiddenOnScroll={false}
          style={{ height: "100%" }}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={getQuotes} />
          }
        >
          <View style={UniversalStyles.quoteBlock}>
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
                setData();
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
          {/* <Button title="get quotes" onPress={getData} /> */}
          {/* <Text style={{ fontSize: 25 }}>{quoteAndAuthor}</Text> */}
          <View style={{ paddingVertical: 30 }}></View>
          <Title3 text={quoteAndAuthor} />
          <View
            focusable={false}
            accessible={true}
            accessibilityHint="This is a hint"
            accessibilityLabel="This is a label"
          >
            <Text selectable={true} style={{ fontSize: 50 }}>
              This is a text
            </Text>
            <Text>This is a text</Text>
          </View>
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
