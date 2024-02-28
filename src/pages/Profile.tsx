import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
  Image,
  Switch,
  StatusBar,
  Pressable,
  Modal,
} from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import UniversalStyles from "../styles/universalStyles";
import { useState } from "react";
import { ImageBackground } from "react-native";
import { ActivityIndicator } from "react-native";

const backImg = {
  uri: "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

const Profile = () => {
  const [password, setPassword] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <GestureHandlerRootView style={UniversalStyles.page}>
      <StatusBar
        backgroundColor="black"
        barStyle="default"
        translucent={true}
        hidden={false}
      />
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text style={{ marginVertical: 10 }}>Email</Text>
            <TextInput
              placeholder="Email"
              style={{
                fontSize: 20,
                borderWidth: 1,
                borderRadius: 10,
                height: 50,
                padding: 10,
              }}
            />
            <Text style={{ marginVertical: 10 }}>Password</Text>
            <TextInput
              textBreakStrategy="highQuality"
              style={{
                fontSize: 20,
                borderWidth: 1,
                borderRadius: 10,
                height: 50,
                padding: 10,
              }}
              secureTextEntry={true}
              onChangeText={setPassword}
              value={password}
              placeholder="Password"
            />
            <Button
              nextFocusDown={100}
              title="Button"
              disabled={false}
              onPress={() => console.log("Button Pressed")}
            />
            <View
              style={{
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                resizeMethod="auto"
                alt="Image"
                onLoad={() => console.log("Image loaded")}
                style={{
                  margin: 10,
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  width: 250,
                  height: 250,
                }}
                source={require("../../src/MovieToEmoji.png")}
              />
            </View>
            <ImageBackground source={backImg} resizeMode="stretch">
              <Text style={styles.text}>Background Image Text</Text>
            </ImageBackground>
            <View
              style={{
                backgroundColor: isEnabled ? "cornflowerblue" : "green",
                flexDirection: "row",
                alignContent: "space-between",
                justifyContent: "space-between",
              }}
            >
              <Text>{isEnabled ? "Switch enabled " : "Switch Disabled"}</Text>
              <Switch
                thumbColor={isEnabled ? "gray" : "black"}
                trackColor={{ false: "red ", true: "blue" }}
                value={isEnabled}
                onChange={toggleSwitch}
              />
            </View>
            <ActivityIndicator
              animating={true}
              color="cornflowerblue"
              size={50}
            />
            <Pressable
              onLongPress={() => console.log("Long Press pressable")}
              onPressIn={() => console.log("Press In")}
              onPressOut={() => console.log("Press out")}
              style={{
                borderWidth: 1,
                borderColor: "black",
                borderRadius: 10,
                padding: 10,
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "green",
              }}
              onPress={() => console.log("Pressable")}
            >
              <Text style={{ fontSize: 25 }}>Pressable</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  image: { flex: 1, justifyContent: "center" },

  text: {
    color: "white",
    fontSize: 30,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    //backgroundColor: "#000000c0",
  },
});

//Database password:- stoicrustyrishii
