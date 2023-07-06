import {createStackNavigator} from '@react-navigation/stack';
import DefaultPostsScreen from '../NestedScreens/DefaultScreen';
import CommentsScreen from '../NestedScreens/CommentsScreen';
import MapScreen from '../NestedScreens/MapScreen';

const NestedScreen = createStackNavigator();

const PostScreen = () => {
    return (
        <NestedScreen.Navigator>
            <NestedScreen.Screen name='DefaultScreen' component={DefaultPostsScreen}/>
            <NestedScreen.Screen name='Comments' component={CommentsScreen}/>
            <NestedScreen.Screen name='Map' component={MapScreen}/>
        </NestedScreen.Navigator>
    )
};

export default PostScreen