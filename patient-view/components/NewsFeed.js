import {Pressable, Text, View} from "react-native";
import React from "react";

function NewsFeed({ navigation }) {
  return(
   <View>
     <Pressable onPress={() => navigation.goBack()}>
       <Text>Latest Content Library</Text>
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
       <Text>type something else</Text>
     </Pressable>
     <Pressable onPress={() => navigation.goBack()}>
       <Text>type something else</Text>
     </Pressable>
     <Pressable onPress={() => navigation.goBack()}>
       <Text>type something else</Text>
     </Pressable>
   </View>
  )
}

export default NewsFeed;
