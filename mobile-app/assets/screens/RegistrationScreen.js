import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const image = {
  url: "https://monosnap.com/file/1RPWuUVoZuooxroJyUa1q6Wk0GaJnG",
};

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.img}
      ></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    flex: 1,
    justifyContent: "center",
  },
});

export default RegistrationScreen;
