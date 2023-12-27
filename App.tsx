import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/pages/home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Quotes from "./src/pages/quotes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Community from "./src/pages/community";
import Profile from "./src/pages/profile";
import Icon from "react-native-vector-icons/Ionicons";

const myIcon = <Icon name="home" size={20} color="green" />;

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
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
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" color="black" size={20} />
          ),
        }}
        name="Quotes"
        component={Quotes}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="notifications" color="black" size={20} />
          ),
        }}
        name="Community"
        component={Community}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings" color="black" size={20} />
          ),
        }}
        name="Profile"
        component={Profile}
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
