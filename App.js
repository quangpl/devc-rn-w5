import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import TheLoading from "./components/TheLoading";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TheLoading />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
