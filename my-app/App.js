import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from './Components/Screens/LoginScreen';
import RegistrationScreen from './Components/Screens/RegistrationScreen';

const AuthStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen 
          options={{headerShown: false}}
          name='loginScreen' 
          component={LoginScreen}/>
        <AuthStack.Screen 
          options={{headerShown: false}}
          name='RegistrationScreen' 
          component={RegistrationScreen}/>
      </AuthStack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
