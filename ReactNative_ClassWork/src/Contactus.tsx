import React, { useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet, ScrollView, Text } from "react-native";
import { db } from "./firebase";
import { ref, push, set } from "firebase/database";

export default function Contactus() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

const handleSubmit = async () => {
    if (!name || !email || !message) {
    Alert.alert("Please fill all fields");
    return;
    }
    const newRef = push(ref(db, "contacts"));
    await set(newRef, { name, email, message });
    Alert.alert("Message sent!");
    setName(""); setEmail(""); setMessage("");
};

return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.card}>
        <Text style={styles.heading}>Contact Us</Text>
        <Text style={styles.inputtext}>Name</Text>
        <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        />
        <Text style={styles.inputtext}>Email</Text>
        <TextInput
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
        autoCapitalize="none"
        />
        <Text style={styles.inputtext}>Leave us a message here!</Text>
        <TextInput
        value={message}
        onChangeText={setMessage}
        multiline
        style={[styles.input, styles.textArea]}
        
        />

        <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} color={'#e1275f'} />
        </View>
    </View>
    </ScrollView>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffc1cc",
    flexDirection:"row",
    width:'100%'
    
},
card: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
    flex:1,
    margin:50
    
    
},
heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#e1275f",
    fontFamily: "Times New Roman"
},
input: {
    paddingBottom:5,
    paddingTop:10,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    fontSize:19
},
inputtext:{
    fontSize:18
    
},
textArea: {
    height: 120
},
buttonContainer: {
    marginTop: 10,
    borderRadius: 10,
    overflow: "hidden",
},
});
