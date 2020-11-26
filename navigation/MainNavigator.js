import React, { useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { useSelector } from "react-redux";

import { DrawerNavigator ,AuthNavigator} from "./GenbiNavigator";
import StartupScreen from '../Screens/StartupScreen';

const MainNavigator = (props) => {
  const isAuth = useSelector(state => !!state.auth.token);
  const didTryAutoLogin = useSelector(state => state.auth.didTryAutoLogin);

    return (
    <PaperProvider>
      <NavigationContainer>
        {isAuth && <DrawerNavigator />}
      {!isAuth && didTryAutoLogin && <AuthNavigator />}
      {!isAuth && !didTryAutoLogin && <StartupScreen />}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default MainNavigator;
