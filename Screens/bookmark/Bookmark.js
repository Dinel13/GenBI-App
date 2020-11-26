import React from "react";
import { StyleSheet, FlatList } from "react-native";
import BookmarkArtikelItem from "../../components/BookmarkArtikelItem"
import {artikel} from "../../DATA/artikel"

const Bookmark = () => {
    return (
        <FlatList data={artikel}
        keyExtractor={Item => Item.id}
        renderItem={itemData => (<BookmarkArtikelItem     
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
          onDelete={()=>{}}
        />)} />
      );
    };

const style = StyleSheet.create({
    bookmarkContainer: {},
});

export default Bookmark;
