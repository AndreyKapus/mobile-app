import { View, Text, StyleSheet } from "react-native";

const PostScreen = () => {
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