import React from "react";
import {
  Stylesheet,
  ScrollView,
  Modal,
  Text,
  Image,
  TouchableNativeFeedback,
  View
} from "react-native";
import PropTypes from "prop-types";

class Homescreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      catUrl: null
    };
    this.props.getCats(this.props.authToken);
  }
  
  openModal(catUrl) {
    this.setState({
      catUrl,
      modal: true
    });
  }

  renderCats() {
    return this.props.cats.map((cat, index) => {
      return (
        <TouchableNativeFeedback
          onPress={() => this.openModal(cat)}
          key={`cat${index}`}
        >
          <Image
            source={{uri: cat}}
            style={{minHeight: 300}}
          />
        </TouchableNativeFeedback>
      );
    });
  }

  render() {
    return (
      <View>
        <Modal
          animationType={"slide"}
          visible={this.state.modal}
          onRequestClose={() => this.setState({modal: false, catUrl: null})}
        >
          <Text>{"Animal: Cat"}</Text>
          <Text>{`Image url: ${this.state.catUrl}`}</Text>
          {this.state.catUrl !== null &&
            <Image
              source={{uri: this.state.catUrl}}
              style={{minHeight: 300}}
            />
          }
        </Modal>
        <ScrollView contentContainerStyle={styles.wrapper}>
          {this.renderCats()}
        </ScrollView>
      </View>
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

