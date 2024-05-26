import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import DetailsScreen from "./screens/Detailscreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import SignupScreen from "./screens/SignupScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Giriş Yap" }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Arabalar" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "Araba Detayları" }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ title: "Şifremi Unuttum" }}
        />
        <Stack.Screen
          name="Register"
          component={SignupScreen}
          options={{ title: "Kayıt Ol" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
