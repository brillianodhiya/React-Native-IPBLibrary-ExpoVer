import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Button,
  Icon,
  Item,
  Input,
  Content,
  Text
} from "native-base";

class Home extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header searchBar rounded style={styles.headersearch}>
          <Text style={styles.title}>
              IPBLibrary
          </Text>
          <Item style={styles.inputsearch}>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>

        <Content padder></Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  headersearch: {
    backgroundColor: "#FFF",
    alignContent: "center",
    height: 80
  },
  inputsearch: {
      marginTop: 40,
      marginBottom: 30,
      marginRight: 10,
      backgroundColor: "#E5E6EE",
      borderRadius: 50,
  },
  title: {
      marginTop: 30,
      marginLeft: 10,
      marginRight: 20,
      fontSize: 25,
      fontFamily: "Airbnb Cereal App"
  }
});

export default Home;
