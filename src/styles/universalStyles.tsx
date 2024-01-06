import { StyleSheet, Text, View } from "react-native";
import React from "react";
//import { theme } from "../theme";

const UniversalStyles = StyleSheet.create({
  page: {
    padding: 5,
  },
  AnimationText: {
    fontSize: 52,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    color: "white",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  quoteBlock: {
    height: "20%",
    borderRadius: 10,
    borderColor: "black",
    width: "100%",
  },
  quoteText: {
    fontSize: 17,
    color: "white",
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
