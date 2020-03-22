import React , {useState, useEffect} from "react";
import { StyleSheet, Text, View, TextInput  } from "react-native";
import Input from "../Component/InputCOmponent";
import Button from "../Component/ButtonComponent";
import Axios from "axios";
import Post from "../Component/PostComponent"
const Home = (props) => {
  const [postDetails , setPostDetails ] = useState({title: "" , content: ""});
  const [posts, setPost] = useState([])
  const onChange = (e , type) =>{
    if(type === "post")
    setPostDetails({...postDetails , content: e.target.value});
    if(type === "title")
    setPostDetails({...postDetails , title: e.target.value});
  }
  const onClick =(e) => {
    
    e.preventDefault();
    console.log(postDetails)
    if(!postDetails.title || !postDetails.content ) return
    const authtoken = localStorage.getItem("authkey")
    const header = {authorization: `Bearer ${authtoken}`}
    const data ={title :postDetails.title , content : postDetails.content }
    Axios.post("/api/post", {...data}, { headers: {...header}} ).then(res => setPost([...posts, res.data.data])).catch(err => console.log(err))
  }
  const selectPostId =(id) =>{
    props.history.push(`post/${id}`)
  }
  useEffect(()=>{
    const authtoken = localStorage.getItem("authkey")
    console.log(authtoken)
    const header = {authorization: `Bearer ${authtoken}`}
    Axios.get("/api/post" ,{ headers: {...header}} ).then(res => setPost(res.data.data)).catch(err => {console.log(err)})
  },[])

  return (
    <View>
    <View style={styles.container}>
      <Input  placeholder="Title" name="title" type="input" onChange={onChange}/>
      <Input  placeholder="Content" name="post" type="text-box" onChange={onChange}/>
      <Button onClick={onClick} title="Submit" />
    </View>
    <View>
      <Post  posts={posts} selectPostId={selectPostId}/>
    </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container:{
    margin: "auto",
    backgroundColor: "#cccc",
    padding: "5rem",
    justifyContent:"center" ,
    textAlign:"center"   
  },
});
