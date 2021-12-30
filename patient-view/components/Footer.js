import {Image, StyleSheet, View} from "react-native";
import LOGO_IMAGE from "../assets/Athelo-Logo-1D.png";
import React from "react";

function Footer() {
  return (
    <View style={styles.footer_menu}>
      <Image source={LOGO_IMAGE} style={styles.logo_image}/>
    </View>
  )
}

const styles = StyleSheet.create({
  footer_menu: {
    flex: .15
  },
  logo_image: {
    // top: 50,
    width: 150,
    height: 125
  },
});

export default Footer;
