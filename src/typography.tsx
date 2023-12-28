import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";
import { useFonts } from "expo-font";
import { Kalam_300Light } from "@expo-google-fonts/kalam";
import { InterFamily } from "./theme";

interface TypographyProps {
  text: string;
  style?: TextStyle;
}

export const NormalText = (props) => {
  return <Text style={props.style}>{props.children}</Text>;
};

export const TitleLarge = ({ text }: TypographyProps) => {
  return (
    <NormalText
      style={{ fontFamily: InterFamily.fontFamilyRegular, fontSize: 34 }}
    >
      {text}
    </NormalText>
  );
};

export const TitleLargeBold = ({ text }: TypographyProps) => {
  return (
    <NormalText
      style={[
        getStyles({
          fontFamily: InterFamily.fontFamilyBold,
          fontSize: 34,
          fontWeight: 800,
          letterSpacing: 0.37,
        }),
      ]}
    >
      {text}
    </NormalText>
  );
};

export const Title1 = ({ text }: TypographyProps) => {
  return (
    <NormalText
      style={{ fontFamily: InterFamily.fontFamilyRegular, fontSize: 28 }}
    >
      {text}
    </NormalText>
  );
};

export const Title1Bold = ({ text }: TypographyProps) => {
  return (
    <NormalText
      style={{ fontFamily: InterFamily.fontFamilyBold, fontSize: 28 }}
    >
      {text}
    </NormalText>
  );
};

export const Title2 = ({ text }: TypographyProps) => {
  return (
    <NormalText
      style={{ fontFamily: InterFamily.fontFamilyRegular, fontSize: 22 }}
    >
      {text}
    </NormalText>
  );
};

export const Title2Bold = ({ text }: TypographyProps) => {
  return (
    <NormalText
      style={{ fontFamily: InterFamily.fontFamilyBold, fontSize: 22 }}
    >
      {text}
    </NormalText>
  );
};

export const Title3 = ({ text }: TypographyProps) => {
  return (
    <NormalText
      style={{ fontFamily: InterFamily.fontFamilyRegular, fontSize: 20 }}
    >
      {text}
    </NormalText>
  );
};

export const Title3Bold = ({ text }: TypographyProps) => {
  return (
    <NormalText
      style={{ fontFamily: InterFamily.fontFamilyBold, fontSize: 20 }}
    >
      {text}
    </NormalText>
  );
};

export const Headline = ({ text }: TypographyProps) => {
  return (
    <NormalText
      style={{ fontFamily: InterFamily.fontFamilyRegular, fontSize: 17 }}
    >
      {text}
    </NormalText>
  );
};

export const Body = ({ text }: TypographyProps) => {
  return (
    <NormalText
      style={{
        fontFamily: InterFamily.fontFamilyRegular,
        fontSize: 17,
        fontWeight: 600,
        lineHeight: 26,
        letterSpacing: -0.40799999237060547,
        textAlign: "left",
      }}
    >
      {text}
    </NormalText>
  );
}; //styleName: Body/Regular;

export const CalloutBold = ({ text }: TypographyProps) => {
  return (
    <NormalText
      style={{ fontFamily: InterFamily.fontFamilyBold, fontSize: 16 }}
    >
      {text}
    </NormalText>
  );
};

export const Callout = ({ text }: TypographyProps) => {
  return (
    <NormalText
      style={{ fontFamily: InterFamily.fontFamilyRegular, fontSize: 16 }}
    >
      {text}
    </NormalText>
  );
};

export const Subheadline = ({ text }: TypographyProps) => {
  return (
    <NormalText
      style={{ fontFamily: InterFamily.fontFamilyRegular, fontSize: 15 }}
    >
      {text}
    </NormalText>
  );
};

export const SubheadlineBold = ({ text }: TypographyProps) => {
  return (
    <NormalText
      style={{ fontFamily: InterFamily.fontFamilyBold, fontSize: 15 }}
    >
      {text}
    </NormalText>
  );
};

export const SubheadlineSemiBold = ({ text }: TypographyProps) => {
  return (
    <NormalText
      style={{ fontFamily: InterFamily.fontFamilySemiBold, fontSize: 15 }}
    >
      {text}
    </NormalText>
  );
};

export const FootNote = ({ text }: TypographyProps) => {
  return (
    <NormalText
      style={{ fontFamily: InterFamily.fontFamilyRegular, fontSize: 13 }}
    >
      {text}
    </NormalText>
  );
};

export const FootnoteBold = ({ text }: TypographyProps) => {
  return (
    <NormalText
      style={{ fontFamily: InterFamily.fontFamilyBold, fontSize: 13 }}
    >
      {text}
    </NormalText>
  );
};

export const Caption1 = ({ text }: TypographyProps) => {
  return (
    <NormalText
      style={{ fontFamily: InterFamily.fontFamilyRegular, fontSize: 12 }}
    >
      {text}
    </NormalText>
  );
};

export const Caption1Bold = ({ text }: TypographyProps) => {
  return (
    <NormalText
      style={{ fontFamily: InterFamily.fontFamilyBold, fontSize: 12 }}
    >
      {text}
    </NormalText>
  );
};

export const PFCLabel = ({ text, style }: TypographyProps) => {
  return (
    <NormalText
      style={{
        fontFamily: InterFamily.fontFamilyRegular,
        fontSize: 12,
        ...style,
      }}
    >
      {text}
    </NormalText>
  );
};

const getStyles = (props) => {
  const { fontSize, fontWeight, letterSpacing } = props;

  return StyleSheet.create({
    fontSize,
    fontWeight,
    letterSpacing,
  });
};
