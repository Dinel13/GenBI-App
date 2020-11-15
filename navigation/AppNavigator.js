import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import HeaderButton from "../components/UI/HeaderButton";
import DetailArtikelScreen from "../Screens/DetailArtikel";
import HomeScreen from "../Screens/HomeScreen";
import Colors from "../constants/Colors";
import { likeArtikel } from "../store/action/ArtikelAction";

const Stack = createStackNavigator();

const AppNavigator = (props) => {

  //untuk redux
  const artikel = useSelector((state) => state.artikel);
  const dispatch = useDispatch();
  let headerRightIcon;
  if (!artikel.liked) {
      headerRightIcon = Platform.OS === "android" ? "md-heart-empty" : "ios-heart-empty"
  } else {
    headerRightIcon = Platform.OS === "android" ? "md-heart" : "ios-heart"
  }

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
                  iconName={headerRightIcon}
                  onPress={() => dispatch(likeArtikel(artikel.liked))}
                />
              </HeaderButtons>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
