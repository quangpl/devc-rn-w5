import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator
} from "react-native";
import TheLoading from "./components/TheLoading";
import Header from "./components/Header";
import Body from "./components/Body";
import Constant from "./util/constant";
import Article from "./components/Article";
import HeaderTitle from "./components/HeaderTitle";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      isLoading: false,
      pageNumber: 0,
      hasError: false
    };
  }
  getArticles = async () => {
    let pageNumber = this.state.pageNumber;
    pageNumber++;
    this.setState({
      isLoading: true
    });
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
          Constant.apiKey
        }&page=${pageNumber}`
      );
      const data = (await response.json()).articles;
      this.setState({
        articles: [...this.state.articles, ...data],
        pageNumber,
        isLoading: false
      });
    } catch (e) {
      console.log(e);
      this.setState({
        hasError: true
      });
    }
    console.log(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
        Constant.apiKey
      }&page=${pageNumber}`
    );
  };
  async componentDidMount() {
    await this.getArticles(1);
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.isLoading && this.state.pageNumber === 0 ? (
          <ActivityIndicator
            size="large"
            style={styles.loading}
            loading={this.state.isLoading}
          />
        ) : (
          <View style={{ flex: 1 }}>
            <Header count={this.state.articles.length} />
            <View style={styles.body}>
              <FlatList
                data={this.state.articles}
                renderItem={({ item }) => <Article data={item} />}
                keyExtractor={item => item.title}
                onEndReached={this.getArticles}
                onEndReachedThreshold={0.4}
                ListFooterComponent={
                  <ActivityIndicator
                    size="large"
                    style={styles.loading}
                    loading={this.state.isLoading}
                  />
                }
              />
            </View>
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
  },
  body: {
    flex: 0.9
  },
  loading: {
    justifyContent: "center",
    flex: 1
  }
});
