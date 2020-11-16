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

import {
  likeArtikel,
  unLikeArtikel,
  bookmarkArtike,
  unBookmarkArtike,
} from "../../store/action/ArtikelAction";

import Colors from "../../constants/Colors";

const DetailArtikelScreen = ({ navigation, route }) => {
  //untuk redux
  const dispatch = useDispatch();
  const artikel = useSelector((state) => state.artikel);
  const artikelID = route.params.id;
  const pernahDiLike = artikel.liked.find(
    (artikel) => artikel.id === artikelID
  );
  const pernahDiBookmark = artikel.bookmark.find(
    (artikel) => artikel.id === artikelID
  );

  let likeTitle;
  let likeOrUnLike;

  if (pernahDiLike) {
    if (!pernahDiLike.liked) {
      likeOrUnLike = () => dispatch(likeArtikel(artikelID));
      likeTitle = "Like";
    } else {
      likeTitle = "UnLike";
      likeOrUnLike = () => dispatch(unLikeArtikel(artikelID));
    }
  } else {
    likeOrUnLike = () => dispatch(likeArtikel(artikelID));
    likeTitle = "Like";
  }

  let titleBookmark;
  let bookmarkOrUnBookmark;

  if (pernahDiBookmark) {
    if (!pernahDiBookmark.bookmark) {
      bookmarkOrUnBookmark = () => dispatch(bookmarkArtike(artikelID));
      titleBookmark = "Bookmark";
    } else {
      bookmarkOrUnBookmark = () => dispatch(unBookmarkArtike(artikelID));
      titleBookmark = "UnBookmark";
    }
  } else {
    bookmarkOrUnBookmark = () => dispatch(bookmarkArtike(artikelID));
    titleBookmark = "Bookmark";
  }

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
          <Button title="komen" color={Colors.accent} onPress={() => {}} />
          <Button
            title="batal"
            color={Colors.accent}
            onPress={() => setisKomen(false)}
          />
        </View>
      )}
      <View style={styles.action}>
        <Button title={titleBookmark} onPress={bookmarkOrUnBookmark} />
        <Button title={likeTitle} onPress={likeOrUnLike} />
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
