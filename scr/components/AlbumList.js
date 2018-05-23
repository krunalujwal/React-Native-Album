import React, { Component } from "react";
import { ScrollView } from "react-native";
import axios from "axios";
import AlbumDetalil from "./AlbumDetalil";

class AlbumList extends Component {
  state = { albums: [] };
  /* componentDidMount() {
    console.log('component Did-Mount AlbumList');
  } */
  componentWillMount() {
    // url = 'https://rallycoding.herokuapp.com/api/music_albums';
    url = 'https://jsonblob.com/api/aae42d10-f897-11e7-a727-1d3351508e76';
    axios
      .get(url)
      .then(response => this.setState({ albums: response.data }));
    // debugger;
  }
  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetalil key={album.title} album={album} /> /* <Text key={album.title}>{album.title}</Text> */
    ));
  }
  render() {
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;

