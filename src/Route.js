import React , {useState} from "react";
import AuthCheck from "./utils/auth";
// import { NativeRouter, Route, Link , withRouter} from "react-router-native";
import { StyleSheet, Text, View, TextInput  } from "react-native";

// Components
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Post from "./Pages/Post";
const App = props => {
  const [ authtoken , setAuthtoken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNzczMDdmZGNkNjUwMmI3NDlmNWQ4NiIsImlhdCI6MTU4NDg3MjI2OSwiZXhwIjoxNTkyNjQ4MjY5fQ.AclU0QRug-NPBfwlxb03FcmyvD0qXYjGEcE6GKpZfkA")
  const [postid , setpostid] = useState("");
  const selectPostId =(id) =>{
    setpostid(id);
  }
  const setToken = (el) => {
    setAuthtoken(el)
  }
  return (  
  <View >
    {
      authtoken === "" &&
      <View >
        <Signup setauth={setToken}/>
        <Login setauth={setToken}/>
      </View>
    }
    {
      authtoken !== "" &&
      <View style={{flexDirection:"row" , justifyContent:"space-around" }}>
        <Home setauth={setToken} authtoken={authtoken} selectPostId={selectPostId} />
        {postid !== "" && <Post authtoken={authtoken} postid={postid}/>}
      </View>
    }
  </View>
  )
};
export default App;
