import {Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import LOGO_IMAGE from "../assets/Athelo-Logo-2D.png";
import React from 'react';

const NamePlaceholder = 'Email'
const PassPlaceholder = 'Password'

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={LOGO_IMAGE} style={styles.logo_image}/>
      <TextInput placeholder={NamePlaceholder} style={styles.input}/>
      <TextInput placeholder={PassPlaceholder} style={styles.input}/>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.submit}>
        <Text style={styles.submit_text}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.signup}>
        <Text style={styles.signup_text}>Create an Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#422250',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    fontSize: 27,
    height: 40,
    margin: 10,
    textAlign: 'center',
    width: '90%'
  },
  logo_image: {
    flexGrow: .2,
    height: 350,
    width: 350
  },
  signup: {
    backgroundColor: '#988098',
    borderRadius: 10,
    height: 70,
    margin: 30,
    width: '70%'
  },
  signup_text: {
    color: 'white',
    fontSize: 25,
    padding: 14,
    textAlign: 'center',
  },
  submit: {
    backgroundColor: '#456212',
    borderRadius: 10,
    height: 70,
    margin: 30,
    width: '70%'
  },
  submit_text: {
    color: 'white',
    fontSize: 30,
    padding: 12,
    textAlign: 'center',
  }
});

export default Login;