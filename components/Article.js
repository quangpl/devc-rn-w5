import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default class Article extends Component {
  componentDidMount(){
    console.log(this.props.data);
  }
  render() {
    goToLink = url => {
      alert(url);
    };
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.data.title}</Text>
        <Text style={styles.time}> {this.props.data.publishedAt}</Text>

        <Image
          source={{
            uri: this.props.data.urlToImage
          }}
          style={styles.thumbnail}
        />
        <Text style={styles.info}>
          <Text style={styles.infoTitle}>Source</Text> :
          {this.props.data.source.name}
        </Text>
        <Text style={styles.info}>{this.props.data.content}</Text>

        <Button
          onPress={() => this.goToLink(this.props.url)}
          title="Read more"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "96%",
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#EEEEEE",
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 4
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center"
  },
  thumbnail: {
    width: "100%",
    height: 130,
    marginVertical: 5
  },
  info: {
    marginVertical: 5,
    fontSize: 15,
    textAlign: "left",
    alignSelf: "stretch"
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: "bold"
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  footerText: {
    flex: 0.5
  },
  time: {
    marginVertical:5,
    fontSize: 14,
    textAlign: "center",
    color: "#BBBBBB"
  }
});
