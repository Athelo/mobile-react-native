import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import LogoImage from './assets/Athelo-Logo-1D.jpg';
const item= {
  image: require("./assets/Athelo-Logo-1C.png"),
  location: "Chennai",
  status: 1,
  projectId: 1
}
// -----------------------------Apple Health Kit -----------------------------------------------------
// import AppleHealthKit, {
//   HealthValue,
//   HealthKitPermissions,
// } from 'react-native-health'
//
// /* Permission options */
// const permissions = {
//   permissions: {
//     read: [
//       AppleHealthKit.Constants.Permissions.HeartRate,
//       AppleHealthKit.Constants.Permissions.StepCount,
//       AppleHealthKit.Constants.Permissions.Steps,
//       AppleHealthKit.Constants.Permissions.VitaminK,
//       AppleHealthKit.Constants.Permissions.Vo2Max,
//       AppleHealthKit.Constants.Permissions.Workout,
//     ],
//     write: [],
//   },
// }
// } as HealthKitPermissions

// console.log('AppleHealthKit', AppleHealthKit);
// console.log('\n\n\n\n');
// console.log('AppleHealthKit Permissions', AppleHealthKit.Constants.Permissions);

// console.log('AppleHealthKit', AppleHealthKit);

// AppleHealthKit.initHealthKit(permissions, (error: string) => {
  /* Called after we receive a response from the system */

  // if (error) {
  //   console.log('[ERROR] Cannot grant permissions!')
  // }
  //
  // /* Can now read or write to HealthKit */
  //
  // const options = {
  //   startDate: new Date(2020, 1, 1).toISOString(),
  // }
  //
  // AppleHealthKit.getHeartRateSamples(
  //   options,
  //   (callbackError: string, results: HealthValue[]) => {
  //     /* Samples are now collected from HealthKit */
  //   },
  // )
// })
// ----------------------------- End Apple Health Kit -----------------------------------------------------


const backgroundImage = {uri: 'http://images.unsplash.com/photo-1550147760-44c9966d6bc7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'};
const LOGO_IMAGE = require("./assets/Athelo-Logo-1D.png");

export default function App() {
  return (
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>
          <View style={styles.header_menu}>
            <Image source={LOGO_IMAGE} style={styles.logo_image}/>
          </View>
          <ScrollView style={styles.content}>
            <View style={styles.entries}>
              <Text style={styles.welcome}>Good morning, Monica!</Text>
              <Text style={styles.suggestion}>It looks like you had a night of good sleep last night</Text>
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
          </ScrollView>
          <View style={styles.footer_menu}>
            <Image source={LOGO_IMAGE} style={styles.logo_image}/>
          </View>
          {/*<StatusBar style="auto" />*/}
        </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    // marginBottom: 200,
    // marginTop: 200,
    flex: 1
  },
  image: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "space-around"
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
  footer_menu: {
    flex: .15
  },
  header_menu: {
    flex: .25
  },
  logo_image: {
    // top: 50,
    width: 150,
    height: 125
  },
  recommendation_icon:{
    borderRadius: 20,
    flex: 1,
  },
  recommendation_text:{
    alignItems: 'center',
    flex: 2,
    color:'gray',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    // TODO: Update this padding style with shorthand
    padding: 20,
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
  text: {
    textAlign: 'center',
    color:'#fff',
    fontWeight: 'bold',
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
