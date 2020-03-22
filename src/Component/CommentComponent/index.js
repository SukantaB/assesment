import React ,{useEffect , useState} from 'react'
import { Text, View } from 'react-native'
import Input from "../InputComponent";
import Button from "../ButtonComponent";
import {styles} from "./style";
const CommnetComponentjs = (props) => {
    return (
        <View styles={styles.commentContainer}>
        <View style={{overflow:"scroll" , maxHeight:"400px" , minHeight:"200px"}}>
        {
             props.comments._comments.map(el => 
                <View style={styles.comments}>
                    <Text style={styles.content}>{el.content}</Text>
                </View>)
        }
        </View>
        <View style={{marginTop:"5px" , padding:"5px" , backgroundColor:"#cccc" , height: "120px"}}>
        <Input  placeholder="Add Comment" name="comment" type="text-box" onChange={props.onChange}/>
        <Button title="Coment" onClick={props.onSubmit}/>
        </View>
        </View>
    )
}

export default CommnetComponentjs

