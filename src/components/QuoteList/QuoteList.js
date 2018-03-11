import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Quote from './Quote';

export default class QuoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <View style={styles.containerQuote}>
        {
        this.props.quotes.map((data, index) => {
            if(index === this.props.quotes.length - 1) {
                return(
                    <Quote key={index} quote={data.quote} author={data.author} />
                )
            }
        })
        }
        </View>
    )
  }
}

const styles = StyleSheet.create({
    containerQuote: {
        flex: 1,
        padding: 15,
        alignItems: "center",
        justifyContent: "center"
      }
})