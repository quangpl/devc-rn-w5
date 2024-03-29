import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class TheLoading extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.loading ? (
          <Image
            source={require("../assets/loading.gif")}
            style={{
              width: 150,
              height: 150
            }}
          />
        ) : null}
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
