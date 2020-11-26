import "react-native-gesture-handler";
import React from "react";
import { createStore, combineReducers ,applyMiddleware} from "redux";
import { Provider } from "react-redux";
import ReduxThunk from 'redux-thunk'

import ArtikelReducer from "./store/reducer/ActionReducer";
import MainNavigator from "./navigation/MainNavigator";
import GenbiReducer from "./store/reducer/GenbiReducer";
import AuthReducer from "./store/reducer/AuthReducer";

const rootReducer = combineReducers({
  artikel: ArtikelReducer,
  genbi : GenbiReducer,
  auth : AuthReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

export default App;
