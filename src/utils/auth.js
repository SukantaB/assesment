import React from "react";
// import AsyncStorage from "@react-native-community/async-storage";

const AuthCheck = WrappedComponent => {
  class newComponent extends React.Component {
    render() {
      //   const token = AsyncStorage.getItem("userToken");
      //   const islogin = token ? true : false;
      console.log("auth hit");
      return <WrappedComponent islogin={false} {...this.props} />;
    }
  }
  return newComponent;
};
export default AuthCheck;
