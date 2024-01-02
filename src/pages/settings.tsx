import { Animated, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UniversalStyles from "../styles/universalStyles";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

const Settings = () => {
  const progress = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scale, {
      toValue: 2,
      useNativeDriver: true,
      duration: 5000,
    }).start();
    Animated.timing(progress, {
      toValue: 1,
      useNativeDriver: true,
      duration: 5000,
    }).start();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <Animated.View
          style={[
            styles.square,
            {
              borderRadius:
                /*(progress.value * SIZE) / 2,*/ progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [(0 * SIZE) / 2, (1 * SIZE) / 2],
                }),
              opacity: progress,
              transform: [{ scale }],
            },
          ]}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const SIZE = 100;

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: "cornflowerblue",
    //backgroundColor: "rbga(0,0,256,0.51)",
  },
});
