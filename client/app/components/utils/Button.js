import React from "react";
import {
  Stylesheet,
  Text,
  View,
  TouchableNativeFeedback
} from "react-native";

class Button extends React.component {
  render() {
    return (
      <TouchableNativeFeedback onPress={this.props.onPress}>
        <View style={styles.wrapper}>
          <Text>{this.props.content}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = {
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 100
  }
};

export default Auth;

