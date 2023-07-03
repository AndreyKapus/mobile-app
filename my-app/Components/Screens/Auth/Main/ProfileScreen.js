import { View, Text, StyleSheet } from "react-native";

const ProfileScreen = () => {
    return (
        <View style={styles.constainer}>
            <Text>
                 ProfileScreen
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

export default ProfileScreen;