import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./src/pages/home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Notifications from "./src/pages/notifications";
import Profile from "./src/pages/profile";
import Icon from "react-native-vector-icons/Ionicons";
import Settings from "./src/pages/settings";
import Details from "./src/pages/details";
import Features from "./src/pages/features";
import Privacy from "./src/pages/privacy";
import Tweet from "./src/pages/tweet";

const myIcon = <Icon name="home" size={20} color="green" />;

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
        options={{ headerShown: false, animation: "slide_from_right" }}
        name="HomePage"
        component={HomePage}
      />
      <Stack.Screen
        options={{ headerShown: false }}
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
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color="black" size={20} />
          ),
        }}
        name="Home"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="notifications" color="black" size={20} />
          ),
        }}
        name="Notifications"
        component={Notifications}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" color="black" size={20} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings" color="black" size={20} />
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
