import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import useAuth from './router/router';

export default function App() {
  const routing = useAuth({})
  return (
    <NavigationContainer>
      {routing}
    </NavigationContainer>
  );
}


