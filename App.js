import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TextInput
} from "react-native";
import Search from "./util/search";
import TheLoading from "./components/TheLoading";
import Header from "./components/Header";
import Body from "./components/Body";
import Constant from "./util/constant";
import Article from "./components/Article";
import HeaderTitle from "./components/HeaderTitle";
import Error from "./components/Error";
import NoArticles from "./components/NoArticles";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      isLoading: false,
      pageNumber: 0,
      hasError: false,
      hasMoreArticles: true,
      tempData: []
    };
  }
 filterForUniqueArticles = arr => {
  const cleaned = [];
  arr.forEach(itm => {
    let unique = true;
    cleaned.forEach(itm2 => {
      const isEqual = JSON.stringify(itm) === JSON.stringify(itm2);
      if (isEqual) unique = false;
    });
    if (unique) cleaned.push(itm);
  });
  return cleaned;
};
  onSearch = text => {
    if (text) {
      const newData = Search(text, this.state.tempData);
      this.setState({
        articles: [...newData]
      });
    } else {
      this.setState({
        articles: [...this.state.tempData]
      });
    }
  };
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
      if (data.length === 0) {
        this.setState({
          hasMoreArticles: false,
          isLoading: false
        });
        return false;
      }
      this.setState({
        articles: this.filterForUniqueArticles([
          ...this.state.articles,
          ...data
        ]),
        pageNumber,
        isLoading: false,
        tempData: this.filterForUniqueArticles([
          ...this.state.articles,
          ...data
        ])
      });
    } catch (e) {
      console.log(e);
      this.setState({
        hasError: true
      });
    }
  };
  async componentDidMount() {
    await this.getArticles(1);
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.hasError ? (
          <Error />
        ) : this.state.isLoading && this.state.pageNumber === 0 ? (
          <ActivityIndicator
            size="large"
            style={styles.loading}
            loading={this.state.isLoading}
          />
        ) : (
          <View style={{ flex: 1 }}>
            <Header count={this.state.articles.length} />
            {/* <TextInput
              style={styles.input}
              onChangeText={text => this.onSearch(text)}
            /> */}
            <View style={styles.body}>
              <FlatList
                data={this.state.articles}
                renderItem={({ item }) => <Article data={item} />}
                keyExtractor={item => item.title}
                onEndReached={this.getArticles}
                onEndReachedThreshold={1}
                ListFooterComponent={
                  <View>
                    {this.state.hasMoreArticles ? (
                      <ActivityIndicator
                        size="large"
                        style={styles.loading}
                        loading={this.state.isLoading}
                      />
                    ) : (
                      <NoArticles />
                    )}
                  </View>
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
  },
  // input: {
  //   flex: 0.1,
  //   borderColor: "gray",
  //   borderWidth: 1,
  //   borderRadius: 2,
  //   width: "96%",
  //   height: 20,
  //   marginHorizontal: 7,
  //   borderRadius: 10
  // }
});
