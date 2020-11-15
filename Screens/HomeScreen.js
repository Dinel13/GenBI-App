import React from "react";
import { Button, View, Text } from "react-native";

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
    </View>
  );
};

export default HomeScreen;
