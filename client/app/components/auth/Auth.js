import React from "react";
import {
  Stylesheet,
  View,
  Modal,
  Text
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

  renderContent() {
    if (this.props.authToken === null) {
      console.log("Error: ", this.props.error);
      return (
        <View style={{flex: 1, alignItems: "stretch", justifyContent: "center"}}>
          <Modal
            animationType="slide"
            visible={this.state.modal}
            onRequestClose={() => this.setState({modal: false})}
          >
            {this.state.modal && <Form action={this.props[this.action]} />}
            <Text style={{color: "red", textAlign: "center"}}>{this.props.error}</Text>
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
    } else {
      return <View />;
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        {this.renderContent()}
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
  authToken: PropTypes.string,
  error: PropTypes.string
};

export default Auth;

