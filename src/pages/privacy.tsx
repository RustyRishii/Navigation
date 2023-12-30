import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import UniversalStyles from "../styles/universalStyles";

const goBackIcon = <Icon name="chevron-back-outline" color="black" size={40} />;

const Privacy = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={UniversalStyles.page}>
      <View>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          {goBackIcon}
        </Pressable>
        <Text>Privacy</Text>
      </View>
    </SafeAreaView>
  );
};

export default Privacy;

const styles = StyleSheet.create({});
