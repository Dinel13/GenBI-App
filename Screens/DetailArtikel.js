import React, { useState, useLayoutEffect } from "react";
import { Button, View, Text } from "react-native";
import Colors from "../constants/Colors";

const DetailArtikelScreen = ({ navigation }) => {
  const [loved, setLoved] = useState(false);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Update the title" color={Colors.accent}
        onPress={() => navigation.setOptions({ title: "Updated!" })}
      />
    </View>
  );
};

export default DetailArtikelScreen;
