import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Touchable,
  Keyboard,
  TextInput,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UniversalStyles from "../styles/universalStyles";
import {
  GestureHandlerRootView,
  TouchableHighlight,
} from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Bookmarks = () => {
  const [nickname, setNickname] = useState();

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={UniversalStyles.page}></SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Bookmarks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
  },
  textInput: {
    width: 300,
    marginVertical: 30,
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 50,
  },
  buttonContainer: {
    width: 240,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
