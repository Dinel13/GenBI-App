import "react-native-gesture-handler";
import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "./components/UI/HeaderButton";
import DetailArtikelScreen from "./Screens/DetailArtikel";
import HomeScreen from "./Screens/HomeScreen";
import Colors from "./constants/Colors";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primary : "white",
          },
          headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "My home",
            // headerTitle: props => <LogoTitle {...props} />, bisa juga tampilkan title dengan komponen
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailArtikelScreen}
          options={({ route }) => ({
            title: route.params.name,
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Cart"
                  iconName={
                    Platform.OS === "android"
                      ? "md-heart-empty"
                      : "ios-heart-empty"
                  }
                  onPress={() => alert("This is a button!")}
                />
              </HeaderButtons>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
