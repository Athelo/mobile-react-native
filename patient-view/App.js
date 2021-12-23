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


const backgroundImage = {uri: 'https://media.istockphoto.com/photos/closeup-nature-view-of-green-leaf-background-picture-id1208290498?k=20&m=1208290498&s=612x612&w=0&h=iOgX0Ycplsasv_aHAY4wWVfncP5AZK0Zs-Lr5mQxdTQ='};
const backgroundImage2 = {uri: 'http://images.unsplash.com/photo-1550147760-44c9966d6bc7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'};
// const LOGO_IMAGE = Image.resolveAssetSource(LogoImage).uri;
const LOGO_IMAGE = require("./assets/Athelo-Logo-1C.png");

export default function App() {
  return (
      <View style={styles.container}>
        <ImageBackground source={backgroundImage2} resizeMode="cover" style={styles.image}>
          {/*<View>*/}
          {/*  <Text style={styles.welcome}>Athelo Health App!!</Text>*/}
          {/*</View>*/}
          <View >
            <Image source={LOGO_IMAGE} style={styles.logo_image}/>
          </View>
          <View style={styles.entries}>
            <Text style={styles.welcome}>Good morning, Heather!</Text>
            <Text style={styles.welcome}>Good morning, Marq!</Text>
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
          <StatusBar style="auto" />
        </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#3d103b',
    // alignItems: 'center',
    // justifyContent: 'center',
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
    borderRadius: 30,
    height: 100,
    justifyContent: 'center',
    width: '80%',
  },
  logo_image: {
    width: 50,
    height: 50
  },
  recommendation_icon:{
    width: '50%',
    height: '100%',
    justifyContent: 'flex-start'
  },
  recommendation_text:{
    color:'gray',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'flex-start'
  },
  recommendation_tiles:{
    alignItems: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'row',
    height: 100,
    justifyContent: 'center',
  },
  suggestion:{
    color:'#fff',
  },
  text: {
    textAlign: 'center',
    color:'#fff',
    fontWeight: 'bold',
  },
  welcome:{
    // alignContent: 'center',
    color:'#fff',
    fontSize: 25,
    fontWeight: 'bold',
  }
});
