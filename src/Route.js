import React from "react";
import { BrowserRouter, Route, Link , Switch } from "react-router-dom";
import { View } from "react-native";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Post from "./Pages/Post";
import Nav from "./utils/Navar"
import AuthCheck from "./utils/auth";

const App = props => {
  return (  
  <View>
    <BrowserRouter >
    <Nav/>
    <Switch>
      <Route path="/" exact  component={AuthCheck(Login)}/>
      <Route path="/signup" component={Signup} />
      <Route path="/home" component={AuthCheck(Home)} />
      <Route path="/post/:id" component={AuthCheck(Post)} />
    </Switch>
    </BrowserRouter>
  </View>

  )
};
export default App;
