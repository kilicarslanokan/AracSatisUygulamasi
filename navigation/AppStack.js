import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import CompareScreen from "../screens/CompareScreen";
import DealerScreen from "../screens/DealerScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CarComparisonScreen from "../screens/CarComparisonScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const CompareStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CompareScreen"
        component={CompareScreen}
        options={{
          headerShown: false,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="CarComparisonScreen"
        component={CarComparisonScreen}
        options={{
          headerShown: false,
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};

const DealerStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DealerScreen"
        component={DealerScreen}
        options={{
          headerShown: false,
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};

export const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Compare") {
            iconName = focused ? "swap-horizontal" : "swap-horizontal-outline";
          } else if (route.name === "Dealer") {
            iconName = focused ? "business" : "business-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          display: "flex",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: "Araçlar",
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Compare"
        component={CompareStack}
        options={{
          tabBarLabel: "Karşılaştır",
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Dealer"
        component={DealerStack}
        options={{
          tabBarLabel: "Bayiler",
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: "Profil",
          headerTitleAlign: "center",
        }}
      />
    </Tab.Navigator>
  );
};
