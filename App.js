// import { StatusBar } from 'expo-status-bar';
// import "react-native-gesture-handler";
import { StyleSheet, Text, View } from 'react-native';
// import Login from './src/screens/Login';
// import Menu from './src/screens/Menu';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { useEffect } from 'react';
import { db, initDataBase} from './src/utils/db';

export default function App() {
  initDataBase();
  return (
    <NavigationContainer>
      {/* <Login></Login> */}
      {/* <Menu></Menu> */}
      <Navigation></Navigation>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     // backgroundColor: 'rgb(238,184,56)',
//     // backgroundColor: 'linear-gradient(0deg, rgba(238,184,56,1) 18%, rgba(254,255,0,1) 100%)'
//   },
// });
