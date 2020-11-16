import React, { useEffect } from "react";
import {
  Image,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../components/UI/HeaderButton";

const GenbiDetailScreen = ({ navigation, route }) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Cart"
            iconName="md-star-outline"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
        </HeaderButtons>
      ),
    });
  }, []);

  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <Image source={{ uri: route.params.foto }} style={styles.image} />
      <Text>Nama : {route.params.name}</Text>
      <Text>KOmsat : {route.params.komsat}</Text>
      <Text>Jabatan : {route.params.jabatan}</Text>
      <Text>Alamat : {route.params.address}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
    backgroundColor: "#ccc",
  },
});

export default GenbiDetailScreen;
