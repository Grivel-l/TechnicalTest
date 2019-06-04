import React from "react";
import {
  Stylesheet,
  Text,
  View,
  TextInput
} from "react-native";

import Button from "../utils/Button";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          placeholder={"email"}
          placeholderTextColor={"gray"}  
          onChangeText={username => this.setState({username})}
          textContentType={"emailAddress"}
        />
        <TextInput
          style={styles.input}
          placeholder={"password"}
          placeholderTextColor={"gray"}
          onChangeText={password => this.setState({password})}
          textContentType={"password"}
          secureTextEntry={true}
        />
        <Button
          content={"Confirm"}
          onPress={() => this.props.action({
            username: this.state.username,
            password: this.state.password
          })}
        />
      </View>
    );
  }
}

const styles = {
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#bababa"
  },
  input: {
    backgroundColor: "white",
    height: 40,
    margin: 10
  }
};

export default Form;

