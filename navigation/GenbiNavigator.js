import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DrawerActions } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import HeaderButton from "../components/UI/HeaderButton";
import DetailArtikelScreen from "../Screens/DetailArtikel";
import HomeScreen from "../Screens/HomeScreen";
import Colors from "../constants/Colors";
import { likeArtikel } from "../store/action/ArtikelAction";
import EventScreen from "../Screens/event/EventScreen";
import DetailEventScreen from "../Screens/event/DetailEventScreen";
import GenbiHomeScreen from "../Screens/genbi/GenbiHomeScreen";
import GenbiDetailScreen from "../Screens/genbi/GenbiDetailScreen";

const defaultScreenOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerBackTitle: "Back",
};

//genbi Stack
const GenbiStack = createStackNavigator();
const GenbiNavigator = () => {
  return (
    <GenbiStack.Navigator 
    initialRouteName="GenBI"
    screenOptions={defaultScreenOptions}>
      <GenbiStack.Screen
        name="GenBi"
        component={GenbiHomeScreen}
        options={{ title: "GenBI Sulsel" }}
      />
      <GenbiStack.Screen
        name="Detail"
        component={GenbiDetailScreen}
        options={({ route }) => ({
          title: route.params.name})}
      />
    </GenbiStack.Navigator>
  );
};

//artikel stack
const ArtikelStack = createStackNavigator();

const ArtikelNavigator = () => {
  //untuk redux
  const artikel = useSelector((state) => state.artikel);
  const dispatch = useDispatch();
  let headerRightIcon;
  if (!artikel.liked) {
    headerRightIcon =
      Platform.OS === "android" ? "md-heart-empty" : "ios-heart-empty";
  } else {
    headerRightIcon = Platform.OS === "android" ? "md-heart" : "ios-heart";
  }

  return (
    <ArtikelStack.Navigator
      initialRouteName="Home"
      screenOptions={defaultScreenOptions}
    >
      <ArtikelStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Semua Artikel",
          // headerTitle: props => <LogoTitle {...props} />, bisa juga tampilkan title dengan komponen
        }}
      />
      <ArtikelStack.Screen
        name="Details"
        component={DetailArtikelScreen}
        options={({ route }) => ({
          title: route.params.name,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Liked"
                iconName={headerRightIcon}
                onPress={() => dispatch(likeArtikel(artikel.liked))}
              />
            </HeaderButtons>
          ),
        })}
      />
    </ArtikelStack.Navigator>
  );
};

//event stack
const EventStackNavigator = createStackNavigator();

const EventNavigator = () => {
  return (
    <EventStackNavigator.Navigator screenOptions={defaultScreenOptions}>
      <EventStackNavigator.Screen
        name="Event"
        component={EventScreen}
        options={{ title: "Semua Event" }}
      />
      <EventStackNavigator.Screen
        name="Details"
        component={DetailEventScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </EventStackNavigator.Navigator>
  );
};

//drawer
const AppDrawerNavigator = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <AppDrawerNavigator.Navigator initialRouteName="GenBI">
      <AppDrawerNavigator.Screen
        name="GenBI"
        component={GenbiNavigator}
        options={{
          headerShown: false,
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-people" : "ios-people"}
              size={23}
              color={Colors.primary}
            />
          ),
        }}
      />
      <AppDrawerNavigator.Screen
        name="Event"
        component={EventNavigator}
        options={{
          headerShown: false,
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-calendar" : "ios-calendar"}
              size={23}
              color={Colors.primary}
            />
          ),
        }}
      />
      <AppDrawerNavigator.Screen
        name="Artikel"
        component={ArtikelNavigator}
        options={{
          headerShown: false,
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-book" : "ios-book"}
              size={23}
              color={Colors.primary}
            />
          ),
        }}
      />
    </AppDrawerNavigator.Navigator>
  );
};
