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

import { likeArtikel } from "../../store/action/ArtikelAction";

import Colors from "../../constants/Colors";

const DetailArtikelScreen = ({ navigation, route }) => {

  //untuk redux
  const dispatch = useDispatch();
  const artikel = useSelector((state) => state.artikel);

  const [komen, setKomen] = useState("");
  const [isKomen, setisKomen] = useState(false);

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
          <Button title="komen"  color={Colors.accent} onPress={() => {}} />
          <Button title="batal"  color={Colors.accent} onPress={() => setisKomen(false)} />
        </View>
      )}
      <View style={styles.action}>
        <Button title="Bookmark" onPress={() => {}} />
        <Button title="Like"  onPress={() => dispatch(likeArtikel(artikel.liked))} />
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
