import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class AlbumList extends Component {
  render() {
    const { textStyle, cardStyle } = styles;
    return (
      <View style={cardStyle}>
        <Text style={textStyle}> ALBUM LIST </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {},
  cardStyle: {}
});
