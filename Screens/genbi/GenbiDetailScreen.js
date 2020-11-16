import React, { useEffect } from "react";
import { Button, View, Text } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../components/UI/HeaderButton";

const GenbiDetailScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Cart"
            iconName="md-star-outline"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
        </HeaderButtons>
      ),
    });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>genbi detail Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details", { name: "Detail event" })}
      />
    </View>
  );
};

export default GenbiDetailScreen;
