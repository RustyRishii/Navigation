import {
  Pressable,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
  RefreshControl,
} from "react-native";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UniversalStyles from "../styles/universalStyles";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import Animated, { Easing, withTiming } from "react-native-reanimated";
import { withSpring, useSharedValue } from "react-native-reanimated";

const Settings = () => {
  const colors = [
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "black",
    "blanchedalmond",
    "blue",
    "blueviolet",
    "brown",
    "burlywood",
    "cadetblue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornsilk",
    "crimson",
    "cyan",
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgray",
    "darkgreen",
    "darkgrey",
    "darkkhaki",
    "darkmagenta",
    "darkolivegreen",
    "darkorange",
    "darkorchid",
    "darkred",
    "darksalmon",
    "darkseagreen",
    "darkslateblue",
    "darkslategrey",
    "darkturquoise",
    "darkviolet",
    "deeppink",
    "deepskyblue",
    "dimgray",
    "dimgrey",
    "dodgerblue",
    "firebrick",
    "floralwhite",
    "forestgreen",
    "fuchsia",
    "gainsboro",
    "ghostwhite",
    "gold",
    "goldenrod",
    "gray",
    "green",
    "greenyellow",
    "grey",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgray",
    "lightgreen",
    "lightgrey",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightslategrey",
    "lightsteelblue",
    "lightyellow",
    "lime",
    "limegreen",
    "linen",
    "magenta",
    "maroon",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "navy",
    "oldlace",
    "olive",
    "olivedrab",
    "orange",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "purple",
    "rebeccapurple",
    "red",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "silver",
    "skyblue",
    "slateblue",
    "slategray",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "teal",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    "white",
    "whitesmoke",
    "yellow",
    "yellowgreen",
  ];

  const [refreshing, setRefreshing] = useState(false);
  const [randomColor, setRandomColor] = useState("");
  const [colorName, setColorName] = useState("");

  const width = useSharedValue(100);
  const translateX = useSharedValue(0);
  const borderRadius = useSharedValue(0);

  const handleTranslateX = () => {
    translateX.value = withSpring(translateX.value + 50);
    console.log("Move right");
  };

  const handleTranslateY = () => {
    translateX.value = withSpring(translateX.value - 50);
    console.log("Move Left");
  };

  const handleTranslateReset = () => {
    //translateX.value = withSpring((translateX.value = 0));
    translateX.value = withTiming(0, {
      duration: 1000,
      easing: Easing.quad,
    });
    console.log("Move right");
  };

  const borderRadiusPlus = () => {
    borderRadius.value = withTiming(borderRadius.value + 5, {
      duration: 100,
      easing: Easing.quad,
    });
  };

  const borderRadiusMinus = () => {
    borderRadius.value = withTiming(borderRadius.value - 5, {
      duration: 100,
      easing: Easing.quad,
    });
  };

  const borderRadiusReset = () => {
    borderRadius.value = withTiming(0, {
      duration: 100,
      easing: Easing.quad,
    });
  };

  const RandomColorFunc = () => {
    let result = Math.floor(Math.random() * colors.length);
    setRandomColor(colors[result]);
    setColorName(colors[result]);
    console.log(colors[result]);
    return colors[result];
  };

  const refreshFunction = useCallback(() => {
    RandomColorFunc();
    setRefreshing(true);
    width.value = 100;
    setTimeout(() => {
      setRefreshing(false);
    }, 200);
  }, []);

  const widthPlus = () => {
    if (width.value >= 100) {
      width.value = withTiming(width.value + 50, {
        duration: 800,
        easing: Easing.quad,
      });
    } else if (width.value >= 400) {
      width.value = width.value + 0;
      ToastAndroid.show("Cant be more than 350", ToastAndroid.SHORT);
    }
  };

  const widthMinus = () => {
    if (width.value > 100) {
      width.value = withTiming(width.value - 50, {
        duration: 1000,
        easing: Easing.quad,
      });
    } else {
      width.value = width.value - 0;
      //width.value = 50;
      ToastAndroid.show("Width can't be less than 100", ToastAndroid.SHORT);
    }
    //width.value = width.value - 50;
  };

  const Reset = () => {
    width.value = withTiming(100, {
      duration: 1000,
      easing: Easing.quad,
    });
    ToastAndroid.show("Width is Reset to 100", ToastAndroid.CENTER);
  };
  return (
    <SafeAreaView style={UniversalStyles.page}>
      <GestureHandlerRootView>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={refreshFunction}
            />
          }
          style={{ height: "100%" }}
          contentContainerStyle={
            {
              //justifyContent: "center",
              //height: "100%",
            }
          }
        >
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text>Refresh to Change the color</Text>
            <Animated.View
              style={[
                {
                  borderRadius: borderRadius,
                  borderWidth: 1,
                  borderColor: "black",
                  width: width,
                  height: 100,
                  backgroundColor: colorName,
                  margin: 5,
                  transform: [{ translateX }],
                },
              ]}
            />
            <Text style={{ fontSize: 20 }}>{colorName}</Text>
          </View>
          <Text>Change width</Text>
          <View style={{ flexDirection: "row" }}>
            <Pressable
              style={UniversalStyles.AnimationButtons}
              onPress={widthPlus}
            >
              <Text style={{ fontSize: 25 }}>➕</Text>
            </Pressable>
            <Pressable
              style={UniversalStyles.AnimationButtons}
              onPress={() => {
                Reset();
                handleTranslateReset();
                borderRadiusReset();
              }}
            >
              <Text style={{ fontSize: 25 }}>🔄</Text>
            </Pressable>
            <Pressable
              style={UniversalStyles.AnimationButtons}
              onPress={widthMinus}
            >
              <Text style={{ fontSize: 25 }}>➖</Text>
            </Pressable>
          </View>
          <View style={{ marginVertical: 10 }} />
          <Text>Move</Text>
          <View style={{ flexDirection: "row" }}>
            <Pressable
              style={UniversalStyles.AnimationButtons}
              onPress={handleTranslateY}
            >
              <Text style={{ fontSize: 25 }}>◀</Text>
            </Pressable>
            <Pressable
              style={UniversalStyles.AnimationButtons}
              onPress={handleTranslateX}
            >
              <Text style={{ fontSize: 25 }}>▶</Text>
            </Pressable>
          </View>
          <Text>Border Radius</Text>
          <View style={{ flexDirection: "row" }}>
            <Pressable
              style={UniversalStyles.AnimationButtons}
              onPress={borderRadiusPlus}
            >
              <Text style={{ fontSize: 25 }}>➕5️⃣</Text>
            </Pressable>
            <Pressable
              style={UniversalStyles.AnimationButtons}
              onPress={borderRadiusMinus}
            >
              <Text style={{ fontSize: 25 }}>➖5️⃣</Text>
            </Pressable>
          </View>
        </ScrollView>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: "cornflowerblue",
    //backgroundColor: "rbga(0,0,256,0.51)",
  },
  ball: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "blue",
    alignSelf: "center",
  },
});

/*
borderRadius: 10,
borderWidth: 1,
borderColor: "black",
width: width,
height: 100,
backgroundColor: colorName,
margin: 5
*/

/*

<GestureDetector gesture={gesture}>
            <Animated.View style={[styles.ball, animatedStyles]} />
</GestureDetector>

 const isPressed = useSharedValue(false);
  const offset = useSharedValue({ x: 0, y: 0 });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offset.value.x },
        { translateY: offset.value.y },
        { scale: withSpring(isPressed.value ? 1.2 : 1) },
      ],
      backgroundColor: isPressed.value ? "yellow" : "blue",
    };
  });

  const start = useSharedValue({ x: 0, y: 0 });
  const gesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onUpdate((e) => {
      offset.value = {
        x: e.translationX + start.value.x,
        y: e.translationY + start.value.y,
      };
    })
    .onEnd(() => {
      start.value = {
        x: offset.value.x,
        y: offset.value.y,
      };
    })
    .onFinalize(() => {
      isPressed.value = false;
    });
*/
