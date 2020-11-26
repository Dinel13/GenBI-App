import React, {useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import {CustomHeaderButtonMaterial} from "../../components/UI/HeaderButton";

const EditProfile = ({navigation}) => {

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButtonMaterial}>
          <Item
            title="Save"
            iconName="content-save"
            onPress={() =>  {}}
          />
        </HeaderButtons>
      ),
    });
  }, []);

  return (
    <View style={style.profileContainer}>
      <Text>Edit My profile</Text>
    </View>
  );
};

const style = StyleSheet.create({
  profileContainer: {},
});

export default EditProfile;
