import Header from './components/Header'
import HomeFeed from './components/HomeFeed'
import Footer from './components/Footer'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
          <Header/>
          <HomeFeed/>
          <Footer/>
          {/*<StatusBar style="auto" />*/}
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
    alignItems: 'center',
    justifyContent: "space-around"
  },
});
