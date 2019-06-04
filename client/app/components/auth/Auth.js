import React from "react";
import {
  Stylesheet,
  View,
  Modal
} from "react-native";
import PropTypes from "prop-types";

import Form from "./Form";
import Button from "../utils/Button";

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    };
    this.action = null;
  }

  openModal(action) {
    this.action = action;
    this.setState({
      modal: true
    });
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Modal
          animationType="slide"
          visible={this.state.modal}
          onRequestClose={() => this.setState({modal: false})}
        >
          {this.state.modal && <Form action={this.props[this.action]} />}
        </Modal>
        <Button
          content={"Register"}
          onPress={() => this.openModal("register")}
        />
        <Button
          content={"Login"}
          onPress={() => this.openModal("login")}
        />
      </View>
    );
  }
}

const styles = {
  wrapper: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: "#f9f9f9"
  }
};

Auth.propTypes = {
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  connected: PropTypes.string
};

export default Auth;

