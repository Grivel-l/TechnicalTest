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
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
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

