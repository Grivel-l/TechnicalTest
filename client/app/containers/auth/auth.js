import {connect} from "react-redux";

import {
  AUTH_LOGIN,
  AUTH_REGISTER
} from "../../actions/auth";
import Auth from "../../components/auth/Auth";

const mapStateToProps = ({auth}) => {
  return {
    connected: auth.authToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: payload => dispatch({payload, type: AUTH_LOGIN}),
    register: payload => dispatch({payload, type: AUTH_REGISTER})
  };
};

const auth = connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

export default auth;
