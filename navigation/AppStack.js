import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../screens";

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Araçlar"
        component={HomeScreen}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
          headerTitleContainerStyle: {
            borderWidth: 2,
            borderRadius: 10,
            borderColor: "gold",
            paddingHorizontal: 10,
            paddingVertical: 5,
          },
        }}
      />
    </Stack.Navigator>
  );
};
