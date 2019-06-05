import React from "react";
import {
  Stylesheet,
  View,
  Modal,
  Text
} from "react-native";
import PropTypes from "prop-types";

class Homescreen extends React.Component {
  constructor(props) {
    super(props);

    console.log("HelloWorld cats");
    this.props.getCats(this.props.authToken);
  }

  renderCats() {
    console.log("Rendering cats: ", this.props.cats);
    return (<View />);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        {this.renderCats()}
      </View>
    );
  }
}

const styles = {
  wrapper: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center"
  }
};

Homescreen.propTypes = {
  authToken: PropTypes.string.isRequired,
  cats: PropTypes.array.isRequired
};

export default Homescreen;

