import { View, Text, StyleSheet } from "react-native";

const PostScreen = ({route}) => {
    console.log(route.params)
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