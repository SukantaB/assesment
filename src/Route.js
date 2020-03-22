import React , {useState} from "react";
import AuthCheck from "./utils/auth";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Post from "./Pages/Post";

const App = props => {
  return (  
  <BrowserRouter >
    <Route path="/" exact  component={AuthCheck(Login)}/>
    <Route path="/signup" component={AuthCheck(Signup)} />
    <Route path="/home" component={AuthCheck(Home)} />
    <Route path="/post/:id" component={AuthCheck(Post)} />
  </BrowserRouter>
  )
};
export default App;
