import {createStackNavigator} from '@react-navigation/stack';
import DefaultPostsScreen from '../NestedScreens/DefaultScreen';
import CommentsScreen from '../NestedScreens/CommentsScreen';
import MapScreen from '../NestedScreens/MapScreen';

const NestedScreen = createStackNavigator();

const PostScreen = () => {
    return (
        <NestedScreen.Navigator>
            <NestedScreen.Screen name='DefaultScreen' component={DefaultPostsScreen} options={{headerShown: false}}/>
            <NestedScreen.Screen name='Comments' component={CommentsScreen} options={{headerShown: false}}/>
            <NestedScreen.Screen name='Map' component={MapScreen} options={{headerShown: false}}/>
        </NestedScreen.Navigator>
    )
};

export default PostScreen