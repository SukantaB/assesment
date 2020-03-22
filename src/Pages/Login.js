import React , {useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "../Component/InputCOmponent";
import Button from "../Component/ButtonComponent";
import Axios from "axios";
const Login = (props) => {
  const [user , serUser ] =  useState({email:"" , password: ""})
  const onChange = (e , type) =>{
    if(type === "email") serUser({...user , email : e.target.value.trim()})
    if(type === "password") serUser({...user , password : e.target.value})
  }
  const onClick = () =>{
    const data = {email: user.email , password: user.password}
    Axios.post("/api/user/login", {...data}).then(res => {
      localStorage.setItem("authkey", res.data.token)
      props.history.push("/home")
    } ).catch(err => {console.log(err)})
  }
  return (
    <View style={styles.container}>
      <Input  placeholder="Email" name="email" type="input-box" onChange={onChange}/>
      <Input  placeholder="Password" name="password" type="input-box" onChange={onChange}/>
      <View styles={styles.buttonrow}>
        <Button onClick={onClick} title="Login" />
        <Button onClick={onClick} title="Signup" />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container:{
    margin: "auto",
    backgroundColor: "#cccc",
    padding: "5rem",
    justifyContent:"center" ,
  },
  buttonrow:{
    flexDirection: "column"
  }
});
