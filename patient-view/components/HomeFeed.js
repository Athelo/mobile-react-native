import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

function HomeFeed({ navigation }) {
  return (
    <ScrollView style={styles.content}>
      <View style={styles.entries}>
        <Pressable>
          <Text style={styles.welcome}>Good morning, Athena!</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.suggestion}>It looks like you had a restful sleep last night</Text>
        </Pressable>
      </View>
      <View style={styles.recommendation_tiles}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-photo/athlete-woman-walking-exercise-rural-road-sunset-background_34200-295.jpg?size=626&ext=jpg'
          }}
          style={styles.recommendation_icon}
        />
        <Text style={styles.recommendation_text}>We recommend two miles of brisk walking for you today</Text>
      </View>
      <View style={styles.recommendation_tiles}>
        <Image
          source={{
            uri: 'https://static01.nyt.com/images/2019/02/28/opinion/28yun/28yun-superJumbo.jpg'
          }}
          style={styles.recommendation_icon}
        />
        <Text style={styles.recommendation_text}>We found this new article on nutrition you may like</Text>
      </View>
      <View style={styles.recommendation_tiles}>
        <Image
          source={{
            uri: 'data:image/jpeg;base64,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'
          }}
          style={styles.recommendation_icon}
        />
        <Text style={styles.recommendation_text}>You have new messages from your community</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  entries: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 100,
    justifyContent: 'center',
    padding: 15
  },
  recommendation_icon:{
    borderRadius: 20,
    flex: 1,
  },
  recommendation_text:{
    alignItems: 'center',
    flex: 2,
    color:'gray',
    flexWrap: 'wrap',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    // TODO: Update this padding style with shorthand
    padding: 10,
    textAlignVertical: 'center',
  },
  recommendation_tiles:{
    backgroundColor: '#fff',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    height: 100,
    justifyContent: 'center',
    margin: 10,
  },
  suggestion:{
    color:'#fff',
    fontSize: 20
  },
  welcome:{
    alignItems: 'center',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center'
  }
});

export default HomeFeed;