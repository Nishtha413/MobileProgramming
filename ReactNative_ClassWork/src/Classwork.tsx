//classwork 22 November 2025

import React from 'react';
import { useState } from 'react';
import {Text, View, TextInput,StyleSheet, Button, Modal} from 'react-native';

const Classwork = ()=>{
    const [modalVisibility, setModalVisibility] = useState(false);
    const [count, setCount]=useState(0)
    return(
    <View style={styles.container}>
        <Button title="Click me to display Modal" onPress={() => setModalVisibility(true)} ></Button>
        <Modal
        visible={modalVisibility}
        transparent={true}
        animationType="fade">
            <View style={styles.modalcontainer}>
                <View style={styles.modalBox}>
                    <Text style={styles.text}>{count}</Text>
                    <Button title="Increase" onPress={()=>setCount(count+1)}></Button>
                    <Button title="Decrease" onPress={()=>setCount(count-1)}></Button>
                    <Button title="Close" onPress={()=>setModalVisibility(false)}></Button>

                </View>
            </View>

        </Modal>
    </View>
    );
};
const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4'
    },
    modalcontainer:{
        flex:1,
        backgroundColor:'#ffe4e1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBox:{
        width: 250,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10
    },
    text:{
        fontSize:24,
        marginLeft:100
    }

});
export default Classwork;