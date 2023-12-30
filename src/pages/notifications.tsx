import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UniversalStyles from "../styles/universalStyles";
import {
  ScrollView,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

const Notifications = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1, padding: 5 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
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

export default Notifications;

const styles = StyleSheet.create({});
