import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../components/UI/HeaderButton";
import GenbiItem from "../../components/GenbiItem";
import { genbi } from "../../DATA/genbi";

const GenbiHomeScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Cart"
            iconName="md-menu"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
        </HeaderButtons>
      ),
    });
  }, []);

  return (
    <FlatList
      data={genbi}
      renderItem={(itemData) => (
        <GenbiItem
          key={itemData.item.id}
          image={itemData.item.imageUri}
          title={itemData.item.title}
          address={itemData.item.address}
          onSelect ={() => {
            navigation.navigate('Detail',{
              name : itemData.item.title,
              genbiId : itemData.item.id
            })
          }}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default GenbiHomeScreen;
