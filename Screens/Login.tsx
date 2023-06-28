import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useState } from 'react'
function Login({ navigation }: any) {
  let [Email, setEmail] = useState('')
  let [Password, setPassword] = useState('')
  const data = {
    Email, Password
  }
  const Submit = () => {
    console.log(data);
    navigation.navigate('Products');
  }
  return (
    <>
      <View style={styles.bg}>
        <Text style={styles.header}>Login</Text>
        <ScrollView>
          <TextInput
            onChangeText={(e) => setEmail(e)}
            style={styles.input}
            placeholderTextColor='white'
            placeholder="Email" />

          <TextInput
            onChangeText={(e) => setPassword(e)}
            style={styles.input}
            placeholderTextColor='white'
            placeholder="Password" />

          <TouchableOpacity
            onPress={Submit}
            style={styles.btn}>
            <Text
              style={[styles.txt, { fontWeight: 'bold', color: 'whitesmoke' }]}>
              Login</Text>
          </TouchableOpacity>
          <Text style={styles.txt}>Don't Have an Account?
            <Text onPress={() => { navigation.navigate('Signup') }} style={{ color: 'lightblue', fontWeight: 'bold' }}> Signup</Text>
          </Text>
        </ScrollView>
      </View>
    </>
  )
}
export default Login

const styles = StyleSheet.create({
  bg: {
    padding: 11,
    backgroundColor: '#000203',
    width: '100%',
    height: '100%'
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
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8,
    width: '99%',
    padding: 10,
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 13
  },
  txt: {
    marginTop: 10,
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
    fontStyle: 'normal',
    textAlign: 'center'
  },
  btn: {
    backgroundColor: 'blue',
    borderRadius: 20,
  }
})