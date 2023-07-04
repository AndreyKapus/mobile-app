import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Camera, CameraType } from 'expo-camera';

const CreateScreen = () => {
    return (
        <View style={styles.constainer}>
            <Camera style={styles.camera}>
                <TouchableOpacity style={styles.snapButton}>
                    <Text style={styles.snapText}>
                        SNAP
                    </Text>
                </TouchableOpacity>
            </Camera>
        </View>
    )
};

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
    },

    camera: {
        height: 300,
        marginTop: 20,
        alignItems: 'center'
    },

    snapButton: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#ff0000',
        marginTop: 220,
        justifyContent: 'center',
        alignItems: 'center',
    },

    snapText: {
        color: '#fff',
        
    },
});

export default CreateScreen;