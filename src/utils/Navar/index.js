import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {withRouter} from "react-router-dom"

import {styles} from "./style"

const Nav = (props) => {
    console.log(props, "nav");
    useEffect(()=>{

    })
    return (
        <View style={styles.nav}>
            {
                localStorage.getItem("authkey") &&
                <TouchableOpacity style={styles.logoutbutton} onPress={()=>{
                    localStorage.clear(); 
                    props.history.push("/")}}>
                   <Text>Logout</Text> 
                </TouchableOpacity>
            }
            {
               !localStorage.getItem("authkey") &&
               <View style={{flexDirection:"row" , alignSelf:"flex-end"}}>
                <TouchableOpacity style={styles.loginButton} onPress={()=>{
                    props.history.push("/")}}>
                   <Text>Login</Text> 
                </TouchableOpacity>
                 <TouchableOpacity style={styles.loginButton} onPress={()=>{
                    props.history.push("/signup")}}>
                   <Text>signup</Text> 
                </TouchableOpacity>
                </View>
            }
    
        </View>
    )
}

export default withRouter(Nav);

