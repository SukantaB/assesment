import React , {useState , useEffect } from 'react';
import Axios from "axios";
import { StyleSheet, Text, View } from 'react-native';
import {styles} from "./style"
import Comment from "../../Component/CommentComponent";

const Post = (props) => {
    const [comment , setCommnet ] = useState("");
    const [post , setPost ] = useState("");

    const onChange = (e , type) =>{
        if(type === "comment")
        setCommnet(e.target.value)
      }
      const onSubmit =() =>{
        if(!comment) return;
        const data = {content : comment}
        const authtoken = localStorage.getItem("authkey")
        const header = {authorization: `Bearer ${authtoken}`}
        const id = props.match.params.id
        Axios.post(`/api/post/${id}` , {...data} , { headers: {...header}}).then(res => {
            const newpost = post;
            newpost._comments.push({content : comment})
            setPost({...newpost});
            setCommnet("")
        }).catch(err => console.log(err))
      }
      useEffect(()=>{
        const authtoken = localStorage.getItem("authkey")
        const header = {authorization: `Bearer ${authtoken}`}
        const id = props.match.params.id
        Axios.get(`/api/post/${id}` ,{ headers: {...header}} ).then(res => setPost(res.data.data)).catch(err => {console.log(err)})
      }, [props.postid])
    return (
        post !== "" &&
        <View style={{width:"50%" , alignSelf:"center"}}>
        <View style={styles.postscontainer}>
        <Text style={styles.title}> User: {post._userid.name} Tittle: {post.title}  </Text>
                <Text style={styles.content}> {post.content}</Text>
        </View>
        <View style={{width:"80%" , alignSelf:"center"}}>
          <Text>Comments</Text>
            <Comment onSubmit ={onSubmit} onChange={onChange} comments={post}  />
        </View>
        </View>
    )
}

export default Post;

const styles2 = StyleSheet.create({})
