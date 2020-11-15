import React, {useState, useLayoutEffect} from "react";
import { Button, View, Text } from "react-native";

const DetailArtikelScreen = ({ navigation }) => {
    const [loved, setLoved] = useState(false);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: "Updated!" })}
      />
    </View>
  );
};

export default DetailArtikelScreen;
