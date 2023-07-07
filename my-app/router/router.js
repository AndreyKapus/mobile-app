import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import LoginScreen from '../Components/Screens/Auth/LoginScreen';
import RegistrationScreen from '../Components/Screens/Auth/RegistrationScreen'
import PostScreen from '../Components/Screens/Main/PostScreen';
import CreateScreen from '../Components/Screens/Main/CreateScreen';
import ProfileScreen from '../Components/Screens/Main/ProfileScreen';
//icons import 
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';


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
        <MainTab.Navigator >
          <MainTab.Screen name='Posts' component={PostScreen}
            options={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({focused, size, color}) => 
                <MaterialIcons name="post-add" size={size} color={color} />
                }}/>
          <MainTab.Screen name='Create' component={CreateScreen}
             options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({focused, size, color}) => 
                <MaterialIcons name="create" size={size} color={color} />
                }}
          />
          <MainTab.Screen name='Profile' component={ProfileScreen}
            options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({focused, size, color}) => 
                <AntDesign name="profile" size={size} color={color} />
                }}
            />
        </MainTab.Navigator>
      )
  };

  export default useAuth;
  