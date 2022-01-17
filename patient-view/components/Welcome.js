import Header from './Header'
import HomeFeed from './HomeFeed'
import Footer from './Footer'
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

const backgroundImage = {uri: 'http://images.unsplash.com/photo-1550147760-44c9966d6bc7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'};

export default function App({ navigation }) {
  return (
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>
          <Header/>
          <HomeFeed navigation={navigation}/>
          <Footer/>
        </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
});
