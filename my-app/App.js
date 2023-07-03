import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './Components/Screens/Auth/LoginScreen';
import RegistrationScreen from './Components/Screens/Auth/RegistrationScreen';
import PostScreen from './Components/Screens/Auth/Main/PostScreen';
import CreateScreen from './Components/Screens/Auth/Main/CreateScreen';
import ProfileScreen from './Components/Screens/Auth/Main/ProfileScreen';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const useAuth = (isAuth) => {
  if(!isAuth) {
    return (
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
    )
  }
    return(
      <MainTab.Navigator>
        <MainTab.Screen name='Posts' component={PostScreen}/>
        <MainTab.Screen name='Create' component={CreateScreen}/>
        <MainTab.Screen name='Profile' component={ProfileScreen}/>
      </MainTab.Navigator>
    )
}

export default function App() {
  const routing = useAuth(null)
  return (
    <NavigationContainer>
      {routing}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

// AuthTab

