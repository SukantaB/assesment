import React , {useState , useEffect , useParams} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {styles} from "../Component/PostComponent"
import Comment from "../Component/CommnetComponent";
import Axios from "axios";

const Post = (props) => {
    const [comment , setCommnet ] = useState("");
    const [post , setPost ] = useState("");
    const { id } = useParams();

    const onChange = (e , type) =>{
        if(type === "comment")
        setCommnet(e.target.value)
      }
      const onSubmit =() =>{
        if(!comment) return;
        const data = {content : comment}
        const authtoken = localStorage.getItem("authkey")
        const header = {authorization: `Bearer ${authtoken}`}
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
        Axios.get(`/api/post/${id}` ,{ headers: {...header}} ).then(res => setPost(res.data.data)).catch(err => {console.log(err)})
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
