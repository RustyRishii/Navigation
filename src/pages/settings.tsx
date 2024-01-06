import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UniversalStyles from "../styles/universalStyles";
import {
  GestureHandlerRootView,
  Gesture,
  RotationGestureHandler,
  TapGestureHandler,
  ScrollView,
  GestureDetector,
} from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
//import GestureHandlerRootView from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

const Settings = () => {
  const isPressed = useSharedValue(false);
  const offset = useSharedValue({ x: 0, y: 0 });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offset.value.x },
        { translateY: offset.value.y },
        { scale: withSpring(isPressed.value ? 1.2 : 1) },
      ],
      backgroundColor: isPressed.value ? "yellow" : "blue",
    };
  });

  const start = useSharedValue({ x: 0, y: 0 });
  const gesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onUpdate((e) => {
      offset.value = {
        x: e.translationX + start.value.x,
        y: e.translationY + start.value.y,
      };
    })
    .onEnd(() => {
      start.value = {
        x: offset.value.x,
        y: offset.value.y,
      };
    })
    .onFinalize(() => {
      isPressed.value = false;
    });

  const width = useSharedValue(50);
  const widthPlus = () => {
    if (width.value >= 50) {
      width.value = width.value + 50;
    } else if (width.value >= 400) {
      width.value = width.value + 0;
      ToastAndroid.show("Cant be more than 350", ToastAndroid.SHORT);
    }
  };

  const widthMinus = () => {
    if (width.value > 50) {
      width.value = width.value - 50;
    } else {
      width.value = width.value - 0;
      //width.value = 50;
      ToastAndroid.show("Cant be less than 50", ToastAndroid.SHORT);
    }
    //width.value = width.value - 50;
  };

  const Reset = () => {
    width.value = 50;
    ToastAndroid.show("Width is Reset to 50", ToastAndroid.CENTER);
  };

  return (
    <SafeAreaView style={UniversalStyles.page}>
      <GestureHandlerRootView>
        <ScrollView>
          <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.ball, animatedStyles]} />
          </GestureDetector>
          <Animated.View
            style={{
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "black",
              width: width,
              height: 100,
              backgroundColor: "violet",
            }}
          />
          <Button title="width Plus" onPress={widthPlus} />
          <Button title="width Minus" onPress={widthMinus} />
          <Button title="Reset" onPress={Reset} />
        </ScrollView>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

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
  ball: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "blue",
    alignSelf: "center",
  },
});
