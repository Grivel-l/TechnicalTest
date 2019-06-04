import React from "react";
import {Provider} from "react-redux";
import createSagaMiddleware from "redux-saga";
import {createStore, applyMiddleware} from "redux";
import {
  StyleSheet,
  Text,
  View
} from "react-native";

import sagas from "./app/sagas/";
import reducers from "./app/reducers/";
import Auth from "./app/containers/auth/auth";

class App extends React.Component {
  constructor(props) {
    super(props);

    const sagaMiddleware = createSagaMiddleware();
    this.store = createStore(
      reducers,
      applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(sagas);
  }

  render() {
    return (
      <Provider store={this.store}>
        <Auth />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;

