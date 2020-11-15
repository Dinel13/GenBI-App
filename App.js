import "react-native-gesture-handler";
import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import ArtikelReducer from "./store/reducer/ActionReducer";
import MainNavigator from "./navigation/MainNavigator";

const rootReducer = combineReducers({
  artikel: ArtikelReducer,
});

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

export default App;
