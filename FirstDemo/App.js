import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Alert, View , SafeAreaView, Button} from 'react-native';

export default function App() {
  let me=1;
  console.log("Run App");
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello Vidura Apps!</Text>
      <Button title='Click me!' onPress={()=>Alert.alert("Are You Sure !", "you'r going to logout.",[{title:"Yes", onPress:()=>{console.log('No')}}])}> </Button>
      <StatusBar style="auto" />
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
});
