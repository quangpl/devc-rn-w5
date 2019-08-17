import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Article from "./Article";
const data = {
  title: "title",
  time: "123",
  image: "https://i.imgur.com/0fp8kvR.png",
  source: "123",
  content: "222",
  url: "124"
};
export default class Body extends Component {
  render() {
    return (
      <View style={styles.root}>
        <ScrollView contentContainerStyle={styles.container}>
          {this.props.list.map(e => (
            <Article key={e.title} data={e} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  root: {
    flex: 0.9
  }
});
