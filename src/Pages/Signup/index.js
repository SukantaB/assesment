import React , {useState} from "react";
import { StyleSheet, View } from "react-native";
import Axios from "axios";
import Input from "../../Component/InputComponent";
import Button from "../../Component/ButtonComponent";
const Signup = (props) => {
  const [user , serUser ] =  useState({email:"" , password: "" , username:""})
  const onChange = (e, type) =>{
    if(type === "email") serUser({...user , email : e.target.value.trim()})
    if(type === "password") serUser({...user , password : e.target.value})
    if(type === "username") serUser({...user , username : e.target.value.trim()})
  }
  const onClick = (e) =>{
    e.preventDefault()
    console.log(user)
    const emailreg = /^([a-z0-9_\-\.]+)@([a-z0-9_\-\.]+)\.([a-z]{2,5})$/g
    // var passwordreg = new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])(?=.{8,})");
    if(!emailreg.test(user.email)) return;
    // if(!user.password.match(passwordreg)) return;
    const data = { name: user.username , email : user.email , password : user.password}
    Axios.post("/api/user/signup", {...data}).then(res => {
      localStorage.setItem("authkey", res.data.token)
      props.history.push("/home")
    }).catch(err => {console.log(err)})
  }
  return (
    <View style={styles.container}>
      <Input  placeholder="Username" name="username" type="input-box" onChange={onChange}/>
      <Input  placeholder="Email" name="email" type="input-box" onChange={onChange}/>
      <Input  placeholder="Password" name="password" type="input-box" onChange={onChange}/>
      <Button onClick={onClick} title="Signup" />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container:{
    margin: "auto",
    backgroundColor: "#cccc",
    padding: "5rem",
    justifyContent:"center" ,
    marginBottom: "10px",
  }
});
