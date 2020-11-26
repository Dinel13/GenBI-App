import React, {useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton, {CustomHeaderButtonMaterial} from "../../components/UI/HeaderButton";

const Profile = ({navigation}) => {

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
            <HeaderButtons HeaderButtonComponent={CustomHeaderButtonMaterial}>
              <Item
                title="Edit"
                iconName="account-edit"
                onPress={() =>  navigation.navigate('Edit Profile')}
              />
            </HeaderButtons>
          ),
        });
      }, []);

  return (
    <View style={style.profileContainer}>
      <Text>My profile</Text>
    </View>
  );
};

const style = StyleSheet.create({
  profileContainer: {},
});

export default Profile;
