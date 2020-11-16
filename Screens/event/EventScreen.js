import React, { useEffect } from "react";
import { Button, View, Text } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../components/UI/HeaderButton";

const EventScreen = ({ navigation }) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Cart"
            iconName="md-menu"
            onPress={() =>  navigation.dispatch(DrawerActions.openDrawer())}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Cart"
            iconName="md-create"
            onPress={() =>  navigation.navigate('Buat Event')}
          />
        </HeaderButtons>
      ),
    });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Event Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details", { name: "Detail event" })}
      />
    </View>
  );
};

export default EventScreen;