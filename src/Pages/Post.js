import React , {useState , useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {styles} from "../Component/PostComponent"
import Comment from "../Component/CommnetComponent";
import Axios from "axios";

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
        const header = {authorization: `Bearer ${props.authtoken}`}
        Axios.post(`/api/post/${props.postid}` , {...data} , { headers: {...header}}).then(res => {
            const newpost = post;
            newpost._comments.push({content : comment})
            setPost({...newpost});
            setCommnet("")
        }).catch(err => console.log(err))
      }
      useEffect(()=>{
        const header = {authorization: `Bearer ${props.authtoken}`}
        Axios.get(`/api/post/${props.postid}` ,{ headers: {...header}} ).then(res => setPost(res.data.data)).catch(err => {console.log(err)})
      }, [props.postid])
    return (
        post !== "" &&
        <View>
        <View style={styles.postscontainer}>
                <Text style={styles.title}>Tittle: {post.title} </Text>
                <Text style={styles.content}> {post.content}</Text>
        </View>
        <View>
            <Comment onSubmit ={onSubmit} onChange={onChange} comments={post}  />
        </View>
        </View>
    )
}

export default Post;

const styles2 = StyleSheet.create({})
