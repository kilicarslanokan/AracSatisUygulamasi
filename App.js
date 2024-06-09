import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootNavigator } from "./navigation/RootNavigator";
import { AuthenticatedUserProvider } from "./providers/AuthenticatedUserProvider";

const App = () => {
  return (
    <AuthenticatedUserProvider>
      <SafeAreaProvider>
        {/* <NavigationContainer> */}
        <RootNavigator />
        {/* </NavigationContainer> */}
      </SafeAreaProvider>
    </AuthenticatedUserProvider>
  );
};

export default App;
