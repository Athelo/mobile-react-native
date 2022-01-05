import {Image, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";

function HomeFeed({ navigation }) {
  return (
    <ScrollView style={styles.content}>
      <View style={styles.entries}>
        <Pressable onPress={() => navigation.navigate('News')}>
          <Text style={styles.welcome}>Good morning, Citizen!</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.suggestion}>It looks like you had a night of good sleep last night</Text>
        </Pressable>
      </View>
      <View style={styles.recommendation_tiles}>
        <Image
          source={{
            uri: 'https://thumbs.dreamstime.com/b/athletic-young-woman-running-white-side-view-athletic-young-woman-running-white-background-side-view-165559529.jpg'
          }}
          style={styles.recommendation_icon}
        />
        <Text style={styles.recommendation_text}>We recommend two miles of brisk exercise for you today</Text>
      </View>
      <View style={styles.recommendation_tiles}>
        <Image
          source={{
            uri: 'https://thumbs.dreamstime.com/b/athletic-young-woman-running-white-side-view-athletic-young-woman-running-white-background-side-view-165559529.jpg'
          }}
          style={styles.recommendation_icon}
        />
        <Text style={styles.recommendation_text}>We found this new article on nutrition you may like</Text>
      </View>
      <View style={styles.recommendation_tiles}>
        <Image
          source={{
            uri: 'https://thumbs.dreamstime.com/b/athletic-young-woman-running-white-side-view-athletic-young-woman-running-white-background-side-view-165559529.jpg'
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
    borderRadius: 20,
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