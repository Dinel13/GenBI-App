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

const ArtikelStack = createStackNavigator();

//artikel stack
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
          title: "My home",
          // headerTitle: props => <LogoTitle {...props} />, bisa juga tampilkan title dengan komponen
          headerLeft: (navigation) => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Cart"
                iconName="md-menu"
                onPress={() => navigation.openDrawer()}
              />
            </HeaderButtons>
          ),
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
        options={{ title: "Events" , headerLeft: (navData) => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Cart"
              iconName="md-menu"
              onPress={() => navData.navigation.dispatch(DrawerActions.openDrawer())}
            />
          </HeaderButtons>
        ),}}
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
    <AppDrawerNavigator.Navigator initialRouteName="Artikel">
      <AppDrawerNavigator.Screen
        name="Artikel"
        component={ArtikelNavigator}
        options={{
          headerShown: false,
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-list" : "ios-list"}
              size={23}
              color={Colors.primary}
            />
          )
        }}
      />
      <AppDrawerNavigator.Screen
        name="Event"
        component={EventNavigator}
        options={{
          headerShown: false,
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-list" : "ios-list"}
              size={23}
              color={Colors.primary}
            />
          ),
        }}
      />
    </AppDrawerNavigator.Navigator>
  );
};
