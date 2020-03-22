import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'

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

export const  styles = StyleSheet.create({
    title:{
        fontWeight: "bold",
        width: "80%",
        borderRadius: "2px",
        marginLeft:"auto",
        marginRight:"auto",
        marginTop: "5px"
    },
    postscontainer: {
        width:"100%",
        height: "90px",
        backgroundColor:"#cccc",
        marginTop: "5px"
    },
    content:{
        width: "80%",
        backgroundColor: "#ffff",
        borderRadius: "2px",
        marginLeft:"auto",
        marginRight:"auto",
        textAlign:"center",
        height:"60%",
        marginTop: "5px"
    }
})
