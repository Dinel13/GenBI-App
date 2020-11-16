import "react-native-gesture-handler";
import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import ArtikelReducer from "./store/reducer/ActionReducer";
import MainNavigator from "./navigation/MainNavigator";
import GenbiReducer from "./store/reducer/GenbiReducer";

const rootReducer = combineReducers({
  artikel: ArtikelReducer,
  genbi : GenbiReducer
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
