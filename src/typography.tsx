import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";
import { InterFamily } from "./theme";

interface TypographyProps {
  text: string;
  style?: TextStyle;
}

export const ReactNativeText = (props) => {
  return <Text style={props.style}>{props.children}</Text>;
};

export const TitleLarge = ({ text }: TypographyProps) => {
  return (
    <ReactNativeText
      style={{ fontFamily: InterFamily.fontFamilyRegular, fontSize: 34 }}
    >
      {text}
    </ReactNativeText>
  );
};

export const TitleLargeBold = ({ text }: TypographyProps) => {
  return (
    <ReactNativeText
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
    </ReactNativeText>
  );
};

export const Title1 = ({ text }: TypographyProps) => {
  return (
    <ReactNativeText
      style={{ fontFamily: InterFamily.fontFamilyRegular, fontSize: 28 }}
    >
      {text}
    </ReactNativeText>
  );
};

export const Title1Bold = ({ text }: TypographyProps) => {
  return (
    <ReactNativeText
      style={{ fontFamily: InterFamily.fontFamilyBold, fontSize: 28 }}
    >
      {text}
    </ReactNativeText>
  );
};

export const Title2 = ({ text }: TypographyProps) => {
  return (
    <ReactNativeText
      style={{ fontFamily: InterFamily.fontFamilyRegular, fontSize: 22 }}
    >
      {text}
    </ReactNativeText>
  );
};

export const Title2Bold = ({ text }: TypographyProps) => {
  return (
    <ReactNativeText
      style={{ fontFamily: InterFamily.fontFamilyBold, fontSize: 22 }}
    >
      {text}
    </ReactNativeText>
  );
};

export const Title3 = ({ text }: TypographyProps) => {
  return (
    <ReactNativeText
      selectable={true}
      style={{ fontFamily: InterFamily.fontFamilyRegular, fontSize: 20 }}
    >
      {text}
    </ReactNativeText>
  );
};

export const Title3Bold = ({ text }: TypographyProps) => {
  return (
    <ReactNativeText
      style={{ fontFamily: InterFamily.fontFamilyBold, fontSize: 20 }}
    >
      {text}
    </ReactNativeText>
  );
};

export const Headline = ({ text }: TypographyProps) => {
  return (
    <ReactNativeText
      style={{ fontFamily: InterFamily.fontFamilyRegular, fontSize: 17 }}
    >
      {text}
    </ReactNativeText>
  );
};

export const Body = ({ text }: TypographyProps) => {
  return (
    <ReactNativeText
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
    </ReactNativeText>
  );
}; //styleName: Body/Regular;

export const CalloutBold = ({ text }: TypographyProps) => {
  return (
    <ReactNativeText
      style={{ fontFamily: InterFamily.fontFamilyBold, fontSize: 16 }}
    >
      {text}
    </ReactNativeText>
  );
};

export const Callout = ({ text }: TypographyProps) => {
  return (
    <ReactNativeText
      style={{ fontFamily: InterFamily.fontFamilyRegular, fontSize: 16 }}
    >
      {text}
    </ReactNativeText>
  );
};

export const Subheadline = ({ text }: TypographyProps) => {
  return (
    <ReactNativeText
      style={{ fontFamily: InterFamily.fontFamilyRegular, fontSize: 15 }}
    >
      {text}
    </ReactNativeText>
  );
};

export const SubheadlineBold = ({ text }: TypographyProps) => {
  return (
    <ReactNativeText
      style={{ fontFamily: InterFamily.fontFamilyBold, fontSize: 15 }}
    >
      {text}
    </ReactNativeText>
  );
};

export const SubheadlineSemiBold = ({ text }: TypographyProps) => {
  return (
    <ReactNativeText
      style={{ fontFamily: InterFamily.fontFamilyBold, fontSize: 15 }}
    >
      {text}
    </ReactNativeText>
  );
};

export const Footnote = ({ text }: TypographyProps) => {
  return (
    <ReactNativeText
      style={{ fontFamily: InterFamily.fontFamilyRegular, fontSize: 13 }}
    >
      {text}
    </ReactNativeText>
  );
};

export const FootnoteBold = ({ text }: TypographyProps) => {
  return (
    <ReactNativeText
      style={{ fontFamily: InterFamily.fontFamilyBold, fontSize: 13 }}
    >
      {text}
    </ReactNativeText>
  );
};

export const Caption1 = ({ text }: TypographyProps) => {
  return (
    <ReactNativeText
      style={{ fontFamily: InterFamily.fontFamilyRegular, fontSize: 12 }}
    >
      {text}
    </ReactNativeText>
  );
};

export const Caption1Bold = ({ text }: TypographyProps) => {
  return (
    <ReactNativeText
      style={{ fontFamily: InterFamily.fontFamilyBold, fontSize: 12 }}
    >
      {text}
    </ReactNativeText>
  );
};

export const PFCLabel = ({ text, style }: TypographyProps) => {
  return (
    <ReactNativeText
      style={{
        fontFamily: InterFamily.fontFamilyRegular,
        fontSize: 12,
        ...style,
      }}
    >
      {text}
    </ReactNativeText>
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
