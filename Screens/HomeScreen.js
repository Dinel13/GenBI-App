import React, { useEffect } from "react";
import { Button, View, Text } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/UI/HeaderButton";


const HomeScreen = ({ navigation }) => {

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
    });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details", { name: "dd" })}
        //navigate akan melihat apakah sudah ada stack, jika ada tinggal diopanngil
        //push lansung membuat stack baru dan bagus untuk tmbah data
      />
    </View>
  );
};

export default HomeScreen;
