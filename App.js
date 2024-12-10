
import { StyleSheet, Text, View } from 'react-native';  
import AppNavigation from './navigation/AppNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <AppNavigation />
  );
}
