import React from "react";
import { Button, View, Text } from "react-native";
import { DrawerActions } from '@react-navigation/native';
const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details", { name: "dd" })}
        //navigate akan melihat apakah sudah ada stack, jika ada tinggal diopanngil
        //push lansung membuat stack baru dan bagus untuk tmbah data
      />
        <Button
        title="Go to Details"
        onPress={ () => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </View>
  );
};

export default HomeScreen;
