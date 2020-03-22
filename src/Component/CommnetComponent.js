import React ,{useEffect , useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Input from "./InputCOmponent";
import Button from "./ButtonComponent";
const CommnetComponentjs = (props) => {
    return (
        <View styles={styles.commentContainer}>
        {
             props.comments._comments.map(el => 
                <View style={styles.comments}>
                    <Text style={styles.content}>{el.content}</Text>
                </View>)
        }
        <Input  placeholder="Add Comment" name="comment" type="text-box" onChange={props.onChange}/>
        <Button title="Coment" onClick={props.onSubmit}/>
        </View>
    )
}

export default CommnetComponentjs

const styles = StyleSheet.create({
    commentContainer: {
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
    },
    comments:{
        width:"100%",
        height: "50px",
        backgroundColor:"#cccc",
        marginTop: "5px"
    }
})
