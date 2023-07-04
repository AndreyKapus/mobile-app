import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Camera, CameraType } from 'expo-camera';
import { useState, useEffect } from "react";

const CreateScreen = ({navigation}) => {
    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState('')
    const [hasPermission, setHasPermission] = useState(null);

    const sendPhoto = () => {
        navigation.navigate('Posts', {photo})
    }

    useEffect(() => {
        (async () => {
     const { status } = await Camera.requestCameraPermissionsAsync();
     setHasPermission(status === "granted");
        })();
      }, []);

    const takePhoto = async () => {
        const pic = await camera.takePictureAsync();
        setPhoto(pic.uri)
        console.log(pic.uri)
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
            <TouchableOpacity style={styles.sendButton}
                    onPress={sendPhoto}
                    >
                    <Text style={styles.sendText}>
                        SEND
                    </Text>
                </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    constainer: {
        height: '80%',
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
        borderRadius: 10,
    },

    photo: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    sendButton: {
        marginHorizontal: 30,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 10,
        height: 60,
        border: 1,
        borderColor: '#4169e1',
        justifyContent: 'center',
        alignItems: 'center',
    },

    sendText: {
        color: '#4169e1',
        fontSize: 20,
    }
});

export default CreateScreen;