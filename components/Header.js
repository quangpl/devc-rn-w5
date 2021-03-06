import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> {this.props.count}</Text>
        <Feather name="file-text" size={24} color="black" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    flexDirection:"row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    
  },
  text:{
      fontWeight:"bold",
      fontSize:20,
      color:"blue",
  }
});
