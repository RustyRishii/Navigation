import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UniversalStyles from "../styles/universalStyles";

const Bookmarks = () => {
  return (
    <SafeAreaView style={UniversalStyles.page}>
      <Text>Bookmarks</Text>
    </SafeAreaView>
  );
};

export default Bookmarks;

const styles = StyleSheet.create({});
