import React from 'react'
import { StyleSheet, Text, View , Button } from 'react-native'

const ButtonComponent = (props) => {
    return (
        <View style={styles.buttonContainer}>
            <Button styles={styles.buttonSubmit} onPress={props.onClick} title={props.title}/>
        </View>
    )
}

export default ButtonComponent

const styles = StyleSheet.create({
    buttonSubmit: {
        color: "blue",
        borderRadius: "2px",
    },
    buttonContainer: {
        marginTop:"10px",
        height:"20px" , 
        width:"80px",
        alignSelf : "center"
    }
})
