import {connect} from "react-redux";

import {CATS_GET} from "../../actions/homescreen";
import Homescreen from "../../components/homescreen/Homescreen";

const mapStateToProps = ({homescreen}) => {
  return {
    cats: homescreen.cats
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCats: payload => dispatch({payload, type: CATS_GET})
  };
};

const homescreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Homescreen);

export default homescreen;

