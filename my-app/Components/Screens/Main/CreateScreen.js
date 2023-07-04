import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Camera, CameraType } from 'expo-camera';
import { useState } from "react";

const CreateScreen = () => {
    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState('')

    const takePhoto = async () => {
        const photo = await camera.takePictureAsync();
        setPhoto(photo.uri)
        console.log('snap', photo.uri)
    };

    return (
        <View style={styles.constainer}>
            <Camera style={styles.camera} ref={setCamera}>
                <TouchableOpacity style={styles.snapButton}
                    onPress={takePhoto}
                    >
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    snapButton: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#ff0000',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    snapText: {
        color: '#fff',
        
    },
});

export default CreateScreen;