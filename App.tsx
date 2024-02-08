import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import Notifications from "./src/pages/notifications";
import Settings from "./src/pages/settings";
import Privacy from "./src/pages/privacy";
import { StyleSheet } from "react-native";
import Bookmarks from "./src/pages/bookmark";
import HomePage from "./src/pages/home";
import Tweet from "./src/pages/tweet";
import { BlurView } from "expo-blur";

const myIcon = <Icon name="home" size={20} color="green" />;

const bookmarkIconOutline = (
  <Icon name="bookmark-outline" size={30} color="black" />
);
const bookmarkIconFilled = <Icon name="bookmark" size={30} color="black" />;

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function QuoteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tweet" component={Tweet} />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="HomePage"
        component={HomePage}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
        name="Privacy"
        component={Privacy}
      />
    </Stack.Navigator>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator
      // initialRouteName="Home"
      screenOptions={{
        tabBarLabelStyle: {
          position: "relative",
          fontSize: 13,
        },
        tabBarActiveTintColor: "red",
        headerShown: false,
        tabBarActiveBackgroundColor: "white",
        //tabBarInactiveBackgroundColor: "grey",
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? "home" : "home-outline"}
              color="black"
              size={20}
            />
          ),
        }}
        name="Home"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? "notifications" : "notifications-outline"}
              color="black"
              size={20}
            />
          ),
        }}
        name="Notifications"
        component={Notifications}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? "bookmark" : "bookmark-outline"}
              color="black"
              size={20}
            />
          ),
        }}
        name="Bookmarks"
        component={Bookmarks}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? "settings" : "settings-outline"}
              color="black"
              size={20}
            />
          ),
        }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

/*
<NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Quotes" component={Quotes} />
      </Stack.Navigator>
    </NavigationContainer>
    */
