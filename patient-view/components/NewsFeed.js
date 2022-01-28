import {Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";

function NewsFeed({ navigation }) {
  return(
   <View>
     <Pressable onPress={() => navigation.goBack()}>
       <Text>starting w metro bundler</Text>
     </Pressable>
     <Pressable onPress={() => navigation.goBack()}>
       <Text>starting w metro bundler</Text>
     </Pressable>
     <Pressable onPress={() => navigation.goBack()}>
       <Text>type something else</Text>
     </Pressable>
     <Pressable onPress={() => navigation.goBack()}>
       <Text>type something else</Text>
     </Pressable>
        <Pressable onPress={() => navigation.goBack()}>
       <Text>type something else</Text>
     </Pressable>
     <Pressable onPress={() => navigation.goBack()}>
       <Text>type something else</Text>
     </Pressable>
     <Pressable onPress={() => navigation.goBack()}>
       <Text style={styles.feed}>type something else</Text>
     </Pressable>
   </View>
  )
}

const styles = StyleSheet.create({
  feed: {
    'color': 'blue'
  }
});
export default NewsFeed;
