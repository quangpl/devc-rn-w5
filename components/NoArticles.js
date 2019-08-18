import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

export default class NoArticles extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Feather name="check-circle" size={24} color="black" />
          <Text style={styles.text}>No more aticles </Text>
        </View>
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
    fontSize: 20,
    color: "blue",
    justifyContent: "center",
    alignContent: "center"
  }
});
