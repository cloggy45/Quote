import React from "react";
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, Dimensions } from "react-native";

import QuoteList from './src/components/QuoteList/QuoteList';

const imageBackground = require("../quote/src/assets/01.jpg");
const imageGithubLogo = require("../quote/src/assets/github.png");

export default class App extends React.Component {
  constructor(props) {
    super(props);

    Dimensions.addEventListener("change", (dims) => {
      console.log(dims);
      this.setState({ viewMode: Dimensions.get('window').height > 500 ? "portrait" : "landscape"});
    })

    this.state = {
      viewMode: Dimensions.get('window').height > 500 ? "portrait" : "landscape",
      quotes: []
    };
  }

  getQuoteFromApi() {
    return fetch("https://talaikis.com/api/quotes/random/")
      .then(response => response.json())
      .then(responseJson =>
        this.setState({ quotes: this.state.quotes.concat(responseJson) })
      )
      .catch(error => {
        alert(error);
      });
  }

  componentDidMount() {
    this.getQuoteFromApi();
  }
  
  

  render() {
    return (
      <View style={styles.containerApp}>
        <Image style={styles.imageBackground} source={imageBackground} />
        <View style={styles.containerTitle}>
          <Text style={this.state.viewMode === "portrait" ? styles.portraitTextTitle : styles.landscapeTextTitle}>Quote</Text>
        </View>
        <QuoteList {...this.state} />
        <View style={this.state.viewMode === "portrait" ? styles.portraitContainerButton : styles.landscapeContainerButton}>
          <TouchableHighlight onPress={this.getQuoteFromApi.bind(this)}> 
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                New Quote
              </Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.imageGithubContainer}>
          <Image style={styles.imageGithubLogo} source={imageGithubLogo}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  imageBackground: {
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center"
  },
  containerTitle: {

  },
  landscapeTextTitle:{
    fontSize: 80,
    fontFamily: "CormorantMedium",
    color: "white",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  portraitTextTitle: {
    fontSize: 150,
    fontFamily: "CormorantMedium",
    color: "white",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  portraitContainerButton: {
    flex: 1,
    justifyContent: "center",
  },
  landscapeContainerButton: {
    flex: 1,
    justifyContent: "flex-end",
  },
  button: {
    padding: 20,
    backgroundColor: "#00725F",
    borderRadius: 10
  },
  buttonText: {
    color: "white",
    fontFamily: "WorkSansMedium"
  },
  imageGithubContainer: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 30
    
  },
  imageGithubLogo: {
    padding: 10
  }
  
});
