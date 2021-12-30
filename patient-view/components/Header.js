import { Image, StyleSheet, View } from 'react-native';
import LOGO_IMAGE from "../assets/Athelo-Logo-1D.png";
import React from "react";

function Header() {
  return (
    <View style={styles.header_menu}>
      <Image source={LOGO_IMAGE} style={styles.logo_image}/>
    </View>

  )
}

const styles = StyleSheet.create({
  header_menu: {
    flex: .25
  },
  logo_image: {
    width: 150,
    height: 125
  },
});

export default Header;
