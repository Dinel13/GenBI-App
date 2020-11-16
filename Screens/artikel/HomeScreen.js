import React, { useEffect } from "react";
import { Button, View, Text , FlatList } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../components/UI/HeaderButton";
import ArtikelItem from "../../components/ArtikelItem"
import {artikel} from "../../DATA/artikel"


const HomeScreen = ({ navigation }) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Cart"
            iconName="md-menu"
            onPress={() =>  navigation.dispatch(DrawerActions.openDrawer())}
          />
        </HeaderButtons>
      ),

      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Cart"
            iconName="md-create"
            onPress={() =>  navigation.navigate('Buat Event')}
          />
        </HeaderButtons>
      ),
    });
  }, []);

  return (
    <FlatList data={artikel}
    keyExtractor={Item => Item.id}
    renderItem={itemData => (<ArtikelItem     
      key={itemData.item.id}
      image={itemData.item.imageUri}
      title={itemData.item.title}
      userId={itemData.item.userId}
      onSelect ={() => {
        navigation.navigate('Details',{
          name : itemData.item.title,
          id : itemData.item.id,
          genbiId : itemData.item.userId,
          foto:itemData.item.imageUri,
          isi : itemData.item.isi,
          komen : itemData.item.komen,
        })
      }}
    />)} />
  );
};

export default HomeScreen;
