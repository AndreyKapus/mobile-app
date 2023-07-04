import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const PostScreen = ({route}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if(route.params) {
            setPosts((prevPosts) => [...prevPosts, route.params])
        }
    }, [route.params])
    return (
        <View style={styles.constainer}>
            <Text>
                 PostScreen
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default PostScreen;