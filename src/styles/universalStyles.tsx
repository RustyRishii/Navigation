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
    color: "black",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  quoteBlock: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 10,
    height: 215,
    paddingHorizontal: 10,
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
  AnimationButtons: {
    padding: 5,
    margin: 5,
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "cornflowerblue",
  },
});

export default UniversalStyles;
