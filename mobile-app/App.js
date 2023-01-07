import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View>
          <Text style={styles.inputTitle}>Email</Text>
          <TextInput style={styles.input} textAlign={"center"} />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput
            style={styles.input}
            textAlign={"center"}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.btn} activeOpacity={0.6}>
          <Text style={styles.btnText}>Sign in</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#000000",
    height: 40,
    borderRadius: 5,
  },
  form: {
    marginHorizontal: 40,
  },
  inputTitle: {
    marginBottom: 10,
  },
  btn: {
    backgroundColor: "#00bfff",
    height: 40,
    borderRadius: 5,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 18,
  },
});
