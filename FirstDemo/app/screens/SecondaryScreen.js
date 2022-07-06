import React from 'react';
import { StyleSheet, ImageBackground,Alert , SafeAreaView, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import color from '../config/color';

function SecondaryScreen(props) {
    return (
        <SafeAreaView style={styles.container} >
        <ImageBackground style={styles.imageContainer} source={require("../assets/lens.jpeg")}>
               <Button style={styles.textContainer} title='Click me!' onPress={()=>Alert.alert("The First Demo!", "This is first demo of React Native",[{title:"Yes", onPress:()=>{console.log('No')}}])}> </Button>
              <StatusBar style="auto" />
        </ImageBackground>
       </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        height:'100%',
      },
      textContainer: {
        color:color.primary
        },
  });

export default SecondaryScreen;