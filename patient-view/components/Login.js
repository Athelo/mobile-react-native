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
        <Text style={styles.submitText}>Submit</Text>
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
    fontSize: 24,
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
  submit: {
    backgroundColor: '#41d800',
    borderRadius: 10,
    height: 40,
    margin: 30,
    width: '60%'
  },
  submitText: {
    color: 'white',
    fontSize: 30,
    padding: 5,
    textAlign: 'center',
  }
});

export default Login;