import React, { useEffect, useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TextInput,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../components/UI/HeaderButton";

import Colors from "../../constants/Colors";
//import { TextInput } from "react-native-paper";

const DetailArtikelScreen = ({ navigation, route }) => {
  const [komen, setKomen] = useState("");
  const [isKomen, setisKomen] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Cart" iconName="md-bookmark" onPress={() => {}} />
        </HeaderButtons>
      ),
    });
  }, []);

  //untuk redux
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <Image source={{ uri: route.params.foto }} style={styles.image} />
      <Text>judul : {route.params.name}</Text>
      <Text>penulis : {route.params.genbiId}</Text>
      <Text>isi : {route.params.isi}</Text>
      {route.params.komen.map((komen) => (
        <Text>{komen.komen}</Text>
      ))}
      {isKomen && (
        <View>
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            value={komen}
            label="dd"
            onChangeText={(text) => setKomen(text)}
          />
          <Button title="komen" onPress={() => {}} />
          <Button title="batal" onPress={() => setisKomen(false)} />
        </View>
      )}
      <View style={styles.action}>
        <Button title="Bookmark" onPress={() => {}} />
        <Button title="Like" onPress={() => {}} />
        <Button
          title={isKomen ? "Save" : "Komen"}
          onPress={() => setisKomen((oldIsKOmen) => !oldIsKOmen)}
        />
      </View>
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
  action: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 8,
  },
});

export default DetailArtikelScreen;
