import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { DrawerNavigator } from "./GenbiNavigator";

const MainNavigator = (props) => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default MainNavigator;
