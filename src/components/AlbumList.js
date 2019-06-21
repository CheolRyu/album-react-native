import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import axios from 'axios';

export default class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => this.setState({ albums: res.data }));
  }
  render() {
    const { textStyle, cardStyle } = styles;
    console.log(this.state);
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
