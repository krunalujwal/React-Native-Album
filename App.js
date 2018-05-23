import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./scr/components/Header";
import AlbumList from "./scr/components/AlbumList";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={"Albums"} />
        <AlbumList />
      </View>
    );
  }
}
