import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UniversalStyles from "../styles/universalStyles";

const Settings = () => {
  return (
    <SafeAreaView style={UniversalStyles.page}>
      <View>
        <Text>Settings</Text>
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({});
