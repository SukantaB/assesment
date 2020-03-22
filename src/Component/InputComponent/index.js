import React from 'react'
import { StyleSheet, View , TextInput} from 'react-native'
import { styles} from "./style"
const InputCOmponent = (props) => {
    return (
        <View>
            <TextInput placeholder={props.placeholder} name={props.name} onChange={(e) => props.onChange(e, props.name)} style={props.type === "text-box" ? styles.textBox : styles.input}/>
        </View>
    )
}

export default InputCOmponent


