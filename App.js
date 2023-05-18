import React from "react";
import { View, Button, StyleSheet } from "react-native";

const App = () => (
  <View style={styles.container}>
    <Button title="REGISTER" onPress={() => alert("Register button clicked")} />
    <Button title="LOGIN" onPress={() => alert("Login button clicked")} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3FCE9",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;