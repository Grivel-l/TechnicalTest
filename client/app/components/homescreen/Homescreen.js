import React from "react";
import {
  Stylesheet,
  ScrollView,
  Modal,
  Text,
  Image
} from "react-native";
import PropTypes from "prop-types";

class Homescreen extends React.Component {
  constructor(props) {
    super(props);

    console.log("HelloWorld cats");
    this.props.getCats(this.props.authToken);
  }

  renderCats() {
    console.log("this.props: ",this.props);
    return this.props.cats.map((cat, index) => {
      return (
        <Image
          source={{uri: cat}}
          style={{minHeight: 300}}
          key={`cat${index}`}
        />
      );
    });
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.wrapper}>
        {this.renderCats()}
      </ScrollView>
    );
  }
}

const styles = {
  wrapper: {
  }
};

Homescreen.propTypes = {
  authToken: PropTypes.string.isRequired,
  cats: PropTypes.array.isRequired
};

export default Homescreen;

