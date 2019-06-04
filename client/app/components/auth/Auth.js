import React from "react";
import {
  Stylesheet,
  View
} from "react-native";

import Button from "../utils/Button";

class Auth extends React.component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Button
          content={"Register"}
          onPress={this.props.register}
        />
        <Button
          content={"Login"}
          onPress={this.props.login}
        />
      </View>
    );
  }
}

const styles = {
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};

export default Auth;

