import React, { useEffect } from "react";
import { Button, View, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../components/UI/HeaderButton";

const CreateEventScreen = ({ navigation }) => {

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Cart"
            iconName="md-save"
            onPress={() => {}}
          />
        </HeaderButtons>
      ),
    });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>create Event Screen</Text>
    </View>
  );
};

export default CreateEventScreen;