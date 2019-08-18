import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

export default class Error extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Feather name="alert-circle" size={24} color="black" />
        <Text>Some thing went wrong, Try again ! </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "blue"
  }
});
