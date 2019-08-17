import React, { Component } from "react";
import { StyleSheet, Text, View , FlatList} from "react-native";
import TheLoading from "./components/TheLoading";
import Header from "./components/Header";
import Body from "./components/Body";
import Constant from "./util/constant";
import Article from "./components/Article";
import HeaderTitle from "./components/HeaderTitle"
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      isLoading: false
    };
  }
  async componentDidMount() {
    this.setState({
      isLoading: true
    });
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
        Constant.apiKey
      }`
    );
    const data = (await response.json()).articles;
    this.setState({
      articles: [...data]
    });
    this.setState({
      isLoading: false
    });
  } 
  render() {
    return (
      <View style={styles.container}>
        {this.state.isLoading ? (
          <TheLoading />
        ) : (
          <View style={{ flex: 1 }}>
            <Header count={this.state.articles.length} />
            {/* <Body list={this.state.articles} /> */}
            <FlatList
              data={this.state.articles}
              renderItem={({ item }) => <Article data={item} />}
              keyExtractor={item => item.title}
              ListHeaderComponent={
                <Header count={this.state.articles.length} />
              }
            />
          </View>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff"
  }
});
