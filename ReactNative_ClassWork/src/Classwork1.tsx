import React from 'react';
import {Text, View, TextInput,StyleSheet, Button, Modal, TouchableOpacity, Alert} from 'react-native';

const Classwork1=()=>{
    const signIn = () => {
    Alert.alert("Signed In Successfully");
    };
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.inputFields}>
                    <TextInput placeholder='Username' style={styles.inputfield}></TextInput>
                    <TextInput placeholder='Password' style={styles.inputfield}></TextInput>
                </View> 
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.cancelBtn} onPress={signIn}>
                        <Text>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signinBtn} onPress={signIn}>
                        <Text>Sign in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};


const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
        width:'100%'
    },
    card:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputfield:{
        borderWidth: 1,
        borderColor: '#bb38aaff',
        borderRadius: 50,
        padding: 15,
        marginBottom: 15,
    },
    inputFields:{
        top:100
    },
    buttons:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        gap:5,
    },
    cancelBtn:{
        borderWidth:2,
        borderColor:'black',
        padding:14,
        backgroundColor:'#f18e8eff',
        borderRadius: 8
    },
    signinBtn:{
        backgroundColor:'rgba(34, 115, 255, 0.73)',
        borderWidth:2,
        borderColor:'black',
        padding:14,
        borderRadius: 8

    }
});
export default Classwork1;