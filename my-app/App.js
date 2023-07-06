import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import useAuth from './router/router';
import { Provider } from 'react-redux';
import {store} from './Redux/store/store'

export default function App() {
  const routing = useAuth({})
  return (
    <Provider store={store}>
      <NavigationContainer>
        {routing}
      </NavigationContainer>
    </Provider>
  );
}


