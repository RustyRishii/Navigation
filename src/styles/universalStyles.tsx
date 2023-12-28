import { StyleSheet, Text, View } from "react-native";
import React from "react";
//import { theme } from "../theme";

const UniversalStyles = StyleSheet.create({
  page: {
    padding: 10,
  },
  quoteBlock: {
    height: "20%",
    borderRadius: 10,
    borderColor: "black",
    width: "100%",
  },
  quoteText: {
    fontSize: 17,
  },
  authorText: {
    paddingVertical: 10,
    //paddingTop: 10,
    fontSize: 20,
    textAlign: "right",
    //fontFamily: theme.fontFamilyInter,
  },
});

export default UniversalStyles;
