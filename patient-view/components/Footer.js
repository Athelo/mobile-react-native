import Feather from "react-native-vector-icons/Feather";
import {Pressable, StyleSheet, View} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import React from "react";

const ICON_SIZE = 35;

function Footer({ navigation }) {
  return (
    <View style={styles.footer_container}>
      <View style={styles.footer_menu}>
        <Feather name="home" size={ICON_SIZE} style={styles.footer_icon}/>
        <Feather name="activity" size={ICON_SIZE} style={styles.footer_icon}/>
        <Feather name="moon" size={ICON_SIZE} style={styles.footer_icon}/>
        <MaterialIcons name="people-outline" size={ICON_SIZE}  style={styles.footer_icon}/>
        <Pressable onPress={() => navigation.navigate('News')}>
          <Feather name="book-open" size={ICON_SIZE}  style={styles.footer_icon}/>
        </Pressable>
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
