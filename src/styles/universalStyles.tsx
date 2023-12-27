import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../theme";

const UniversalStyles = StyleSheet.create({
  page: {
    padding: 10,
  },
  quoteBlock: {
    height: "30%",
    //padding: 10,
    borderRadius: 10,
    //borderWidth: 1,
    borderColor: "black",
    width: "100%",
    //justifyContent: "center",
  },
  quoteText: {
    fontFamily: theme.fontFamilyRegular,
    fontSize: 20,
  },
  authorText: {
    paddingVertical: 10,
    //paddingTop: 10,
    fontSize: 20,
    textAlign: "right",
  },
});

export default UniversalStyles;
