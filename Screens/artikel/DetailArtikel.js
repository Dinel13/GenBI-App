import React from "react";
import { Button, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { likeArtikel } from "../../store/action/ArtikelAction";

import Colors from "../../constants/Colors";

const DetailArtikelScreen = ({ navigation }) => {

  //untuk redux
  const dispatch = useDispatch();
  const artikel = useSelector((state) => state.artikel);

  
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="like"
        onPress={() => dispatch(likeArtikel(artikel.liked))}
      />
      <Button
        title="Update the title"
        color={Colors.accent}
        onPress={() => navigation.setOptions({ title: "Updated!" })}
      />
    </View>
  );
};

export default DetailArtikelScreen;
