import Feather from "react-native-vector-icons/Feather";
import {Image, StyleSheet, View} from "react-native";
import LOGO_IMAGE from "../assets/Athelo-Logo-1D.png";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";

const ICON_SIZE = 35;

function Footer() {
  return (
    <View style={styles.footer_container}>
      <View style={styles.footer_menu}>
        <Feather name="home" size={ICON_SIZE} style={styles.footer_icon}/>
        <Feather name="activity" size={ICON_SIZE} style={styles.footer_icon}/>
        <Feather name="moon" size={ICON_SIZE} style={styles.footer_icon}/>
        <MaterialIcons name="people-outline" size={ICON_SIZE}  style={styles.footer_icon}/>
        <Feather name="book-open" size={ICON_SIZE}  style={styles.footer_icon}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  footer_container: {
    flex: .20,
    justifyContent: 'center',
  },
  footer_icon: {
    color: 'white',
    padding: 10,
  },
  footer_menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Footer;
