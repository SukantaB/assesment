import React from 'react'
import {  Text, View , TouchableOpacity } from 'react-native'
import {styles} from "./style"
const PostComponent = (props) => {
    console.log(props)
    return (
        props.posts.map(el=> 
            <TouchableOpacity onPress={()=>{props.selectPostId(el._id)}}>
                <View style={styles.postscontainer}>
        <Text style={styles.title}> User: {el._userid.name} Tittle: {el.title}</Text>
                <Text style={styles.content}>{el.content}</Text>
                </View>
            </TouchableOpacity>
           
        )
    )
}

export default PostComponent


