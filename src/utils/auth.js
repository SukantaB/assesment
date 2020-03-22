import React from "react";
// import AsyncStorage from "@react-native-community/async-storage";
import {withRouter} from "react-router-dom"
const AuthCheck = WrappedComponent => {
  class newComponent extends React.Component {
    componentDidMount(){
      console.log(this.props)
      const token = localStorage.getItem("authkey");
      if(!token) this.props.history.push("/")
    }
    render() {
      return <WrappedComponent  {...this.props} />;
    }
  }
  return newComponent;
};
export default AuthCheck;
