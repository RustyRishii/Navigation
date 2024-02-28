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
    <GestureHandlerRootView style={{ flex: 1, paddingHorizontal: 5 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          //snapToInterval={50}
          snapToEnd={true}
        >
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
