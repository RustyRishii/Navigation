import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UniversalStyles from "../styles/universalStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Quotes = () => {
  return (
    <SafeAreaView style={UniversalStyles.page}>
      <StatusBar style="auto" backgroundColor="black" />
      <Text>Quotes</Text>
    </SafeAreaView>
  );
};

export default Quotes;

const styles = StyleSheet.create({});
