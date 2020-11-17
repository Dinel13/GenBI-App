import React, { useEffect, useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TextInput,
  Platform,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../components/UI/HeaderButton";
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
  let headerRightIcon;

  if (pernahDiLike) {
    if (!pernahDiLike.liked) {
      likeOrUnLike = () => dispatch(likeArtikel(artikelID));
      likeTitle = "Like";
      headerRightIcon =
        Platform.OS === "android" ? "md-heart-empty" : "ios-heart-empty";
    } else {
      headerRightIcon = Platform.OS === "android" ? "md-heart" : "ios-heart";
      likeTitle = "UnLike";
      likeOrUnLike = () => dispatch(unLikeArtikel(artikelID));
    }
  } else {
    likeOrUnLike = () => dispatch(likeArtikel(artikelID));
    likeTitle = "Like";
    headerRightIcon =
      Platform.OS === "android" ? "md-heart-empty" : "ios-heart-empty";
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

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Liked"
            iconName={headerRightIcon}
            onPress={likeOrUnLike}
          />
        </HeaderButtons>
      ),
    });
  }, [pernahDiLike]);

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
