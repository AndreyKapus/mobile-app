import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Camera, CameraType } from 'expo-camera';
import { useState } from "react";

const CreateScreen = () => {
    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState('')

    const takePhoto = async () => {
        const pic = await camera.takePictureAsync();
        setPhoto(pic.uri)
    };
    
    return (
        <View style={styles.constainer}>
            <Camera style={styles.camera} ref={setCamera}>
                {photo && (
                    <View style={styles.takePhotoContainer}>
                        <Image source={{uri: photo}} style={styles.photo}/>
                    </View>
                )}
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

    takePhotoContainer: {
        position: "absolute",
        top: 50, 
        left: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },

    photo: {
        width: 200,
        height: 200,
    }
});

export default CreateScreen;