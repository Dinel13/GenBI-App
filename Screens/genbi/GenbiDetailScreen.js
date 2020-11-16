import React, { useEffect } from "react";
import { Image, Text, StyleSheet, ScrollView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../components/UI/HeaderButton";
import { useDispatch, useSelector } from "react-redux";

import { likeGenbi , updateLikeGenbi} from "../../store/action/GenbiAction";

const GenbiDetailScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const genbi = useSelector((state) => state.genbi);
  const genbiID = route.params.genbiId;
  const pernahDiLike = genbi.genbis.find((genbi) => genbi.id === genbiID);
  
  let startIcon;
  let likeOrUnLike;

  if (pernahDiLike) {
    if (!pernahDiLike.like) {
      likeOrUnLike = () => dispatch(updateLikeGenbi(genbiID, true));
      startIcon =
        Platform.OS === "android" ? "md-star-outline" : "ios-star-outline";
    } else {
      likeOrUnLike = () => dispatch(updateLikeGenbi(genbiID, false));
      startIcon = Platform.OS === "android" ? "md-star" : "ios-star";
    }
  } else {
    startIcon =
      Platform.OS === "android" ? "md-star-outline" : "ios-star-outline";
    likeOrUnLike = () => dispatch(likeGenbi(genbiID, true));
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Cart" iconName={startIcon} onPress={likeOrUnLike} />
        </HeaderButtons>
      ),
    });
  }, [genbiID, pernahDiLike, likeOrUnLike, genbi]);

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
