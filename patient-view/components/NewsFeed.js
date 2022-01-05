import {Pressable, Text, View} from "react-native";
import React from "react";

function NewsFeed({ navigation }) {
  return(
   <View>
     <Pressable onPress={() => navigation.goBack()}>
       <Text>This is the news feed page</Text>
     </Pressable>
     <Pressable onPress={() => navigation.goBack()}>
       <Text>This is the news feed page</Text>
     </Pressable>
     <Pressable onPress={() => navigation.goBack()}>
       <Text>This is the news feed page</Text>
     </Pressable>
     <Pressable onPress={() => navigation.goBack()}>
       <Text>This is the news feed page</Text>
     </Pressable>
     <Pressable onPress={() => navigation.goBack()}>
       <Text>This is the news feed page</Text>
     </Pressable>
     <Pressable onPress={() => navigation.goBack()}>
       <Text>This is the news feed page</Text>
     </Pressable>
     <Pressable onPress={() => navigation.goBack()}>
       <Text>This is the news feed page</Text>
     </Pressable>
     <Pressable onPress={() => navigation.goBack()}>
       <Text>This is the news feed page</Text>
     </Pressable>
   </View>
  )
}

export default NewsFeed;
