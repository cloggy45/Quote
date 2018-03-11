import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Quote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    const { quote, author } = this.props;

    return(
      <View>
        <Text style={styles.textQuote}>"{quote}"</Text>
        <Text style={styles.textAuthor}>{author}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textQuote: {
    textAlign: "center",
    fontSize: 16,
    color: "white"

  },
  textAuthor: {
    textAlign:"right",
    paddingTop: 10
  }
})