import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UniversalStyles from "../styles/universalStyles";

const Profile = () => {
  return (
    <SafeAreaView style={UniversalStyles.page}>
      <Text>Profile</Text>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
