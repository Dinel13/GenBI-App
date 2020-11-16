import React, { useEffect } from "react";
import { Image, Text, StyleSheet, ScrollView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../components/UI/HeaderButton";
import { useDispatch, useSelector } from "react-redux";

import { likeGenbi } from "../../store/action/GenbiAction";

const GenbiDetailScreen = ({ navigation, route }) => {
  const genbi = useSelector((state) => state.genbi);
  const dispatch = useDispatch();
  let startIcon;
  if (!genbi.liked) {
    startIcon =
      Platform.OS === "android" ? "md-star-outline" : "ios-star-outline";
      console.log('fff');
  } else {
    console.log('bb');
    startIcon = Platform.OS === "android" ? "md-star" : "ios-star";
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Cart"
            iconName={startIcon}
            onPress={() => dispatch(likeGenbi(genbi.liked))}
          />
        </HeaderButtons>
      ),
    });
  }, [HeaderButtons, genbi.liked]);

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
