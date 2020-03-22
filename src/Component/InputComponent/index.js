import React from 'react'
import { StyleSheet, Text, View , TextInput} from 'react-native'

const InputCOmponent = (props) => {
    return (
        <View>
            <TextInput placeholder={props.placeholder} name={props.name} onChange={(e) => props.onChange(e, props.name)} style={props.type === "text-box" ? styles.textBox : styles.input}/>
        </View>
    )
}

export default InputCOmponent

const styles = StyleSheet.create({
    textBox:{
        backgroundColor:"#ffff",
        borderRadius: "5px",
        height: "4rem",
        width: "400px",
        textAlign:"center",
        alignSelf:"center",
    },
    input: {
        marginTop : "5px",
        width: "400px",
        height: "40px",
        backgroundColor:"#ffff",
        borderRadius: "5px",
        textAlign:"center",
        marginBottom : "5px",
    }
})
