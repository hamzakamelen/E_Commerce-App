import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from 'react'


function Signup({ navigation }: any) {

  let [firstName, setfirstName] = useState('')
  let [lastName, setlastName] = useState('')
  let [Email, setEmail] = useState('')
  let [Password, setPassword] = useState('')
  let [ConfirmPassword, setConfirmPassword] = useState('')
  const data = {
    firstName, lastName, Email, Password, ConfirmPassword
  }
  const Submit = () => {
    console.log(data);
    navigation.navigate('Login');
  }


  return (
    <View style={styles.bg}>
      <Text style={styles.header}>Sign Up</Text>
      <ScrollView>
        <TextInput
          onChangeText={(e) => setfirstName(e)}
          style={styles.input}
          placeholderTextColor="white"
          placeholder="First Name"
        />
        <TextInput
          onChangeText={(e) => setlastName(e)}
          style={styles.input}
          placeholderTextColor="white"
          placeholder="Last Name"
        />
        <TextInput
          onChangeText={(e) => setEmail(e)}
          style={styles.input}
          placeholderTextColor="white"
          placeholder="Email"
        />
        <TextInput
          onChangeText={(e) => setPassword(e)}
          style={styles.input}
          placeholderTextColor="white"
          placeholder="Password"
        />
        <TextInput
          onChangeText={(e) => setConfirmPassword(e)}
          style={styles.input}
          placeholderTextColor="white"
          placeholder="Confirm Password"
        />
        <TouchableOpacity onPress={Submit} style={styles.btn}>
          <Text style={[styles.txt, { fontWeight: 'bold' }]}>Signup</Text>
        </TouchableOpacity>
        <Text style={styles.txt}>
          Already Have an Account?
          <Text onPress={() => { navigation.navigate('Login') }} style={{ color: 'lightblue', fontWeight: 'bold' }}> Login</Text>
        </Text>
      </ScrollView>
    </View>
  );
}

export default Signup;

const styles = StyleSheet.create({
  bg: {
    padding: 11,
    backgroundColor: "#000203",
    width: "100%",
    height: "100%",
  },
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: "white",
    fontSize: 42,
    marginBottom: 11,
    marginTop: "28%",
    fontStyle: "normal",
    padding: 10,
  },
  input: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 8,
    width: "99%",
    padding: 12,
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 13,
  },
  txt: {
    marginTop: 8,
    color: "white",
    fontSize: 18,
    marginBottom: 10,
    fontStyle: "normal",
    textAlign: "center",
  },
  btn: {
    backgroundColor: "blue",
    borderRadius: 20,
  },
});
