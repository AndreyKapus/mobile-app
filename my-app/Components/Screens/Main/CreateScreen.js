import { View, Text, StyleSheet } from "react-native";

const CreateScreen = () => {
    return (
        <View style={styles.constainer}>
            <Text>
                 CreateScreen
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

export default CreateScreen;