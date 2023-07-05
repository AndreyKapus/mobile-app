import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const PostScreen = ({route}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if(route.params) {
            setPosts((prevPosts) => [...prevPosts, route.params])
        }
    }, [route.params])
    return (
        <View style={styles.constainer}>
            <FlatList data={posts}
             keyExtractor={(item, index) => index.toString()}
             renderItem={({item}) => 
             <View style={{marginBottom: 10}}>
                <Image source={{uri: item.photo}} style={{width: 300, height: 300}}/>
             </View>}
             />
        </View>
    )
};

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
    }
})

export default PostScreen;