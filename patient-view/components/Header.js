import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import { Image, StyleSheet, Text, View } from 'react-native';
import LOGO_IMAGE from "../assets/Athelo-Logo-1D.png";
import React from "react";

const ICON_SIZE = 35;

function Header() {
  return (
    <View style={styles.header_container}>
      <View style={styles.header_menu}>
        <Entypo name="menu" size={ICON_SIZE} style={styles.header_icon}/>
        <Image source={LOGO_IMAGE} style={styles.logo_image}/>
        <Feather name="message-square" size={ICON_SIZE} style={styles.header_icon}/>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  header_container: {
    flex: .25
  },
  header_menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 45
  },
  header_icon: {
    color: 'white',
    paddingTop: 30
  },
  logo_image: {
    height:100,
    width: 100,
  },
});

export default Header;
