import React, { Component } from "react";
import { StyleSheet, Image, Text } from "react-native";
import {
  Container, Content, Thumbnail, H1, Button, H2, View, Spinner, Badge
} from "native-base";
import { connect } from "react-redux";
import { rentBook, returnBook, getBooks } from "../public/redux/action/books";
import NavigationService from "../components/Navigationservice";

class Viewbook extends Component {
  handleRental = async event => {
    event.preventDefault();
    const idbooks = this.props.navigation.getParam('idbooks');
    await this.props.dispatch(rentBook(idbooks))
    NavigationService.navigate('History')
  }
  handleReturn = async event => {
    event.preventDefault();
    const idbooks = this.props.navigation.getParam('idbooks');
    await this.props.dispatch(returnBook(idbooks));
    NavigationService.navigate('History')
  }
  render() {
    const { book } = this.props;
    return (
      <Container style={styles.container}>  
        {book.bookList ? (
          book.bookList.map((books, index) => {
            if (books.idbooks == this.props.navigation.getParam('idbooks')) {
              return(
        <Content padder>
            <Content>
              <View>
                <Image style={styles.detailimage} source={{ uri: books.image }} />
              </View>
              <View>
              <Badge primary>
                  <Text style={styles.textbadge}>{books.genre}</Text>
                </Badge>
                {books.available == 'Available' ? (
                  <Badge info>
                    <Text style={styles.textbadge}>{books.available}</Text>
                  </Badge>
                ): (
                <Badge warning>
                  <Text style={styles.textbadge}>{books.available}</Text>
                </Badge>
                )}
              </View>
            </Content>
                <Thumbnail style={styles.floatingimage} large square source={{ uri: books.image }} />
                <H1 style={styles.title}>{books.title.substring(0,18)}</H1>
                <Text style={styles.date}>{books.date_released}</Text>
            <Content style={styles.description}>
                <Text>{books.description}</Text>
            </Content>
            {books.available == 'Available' ? (
            <Button rounded warning style={styles.rentbutton} onPress={this.handleRental}>
                <H2 style={styles.textrent}>RENT</H2>
            </Button>
            ): books.available !== 'Available' ? (
            <Button rounded warning style={styles.rentbutton} onPress={this.handleReturn}>
              <H2 style={styles.textreturn}>RETURN</H2>
            </Button>
            ): null}

        </Content>
        )
      }
    })
  ): <Spinner color="blue" /> }
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textbadge: {
    color: 'white',
    fontFamily: "Airbnb Cereal App",
  },
  detailimage:  {
      width: '100%',
      height: 300,
      flex: 1,
      borderRadius: 10,
      overlayColor: 'grey'
  },
  floatingimage: {
      position: 'absolute',
      resizeMode: 'contain',
      height: 140,
      borderRadius: 30,
      marginTop: 220,
      marginLeft: 230,
  },
  description: {
      fontFamily: "Airbnb Cereal App",
      marginTop: 40,
      marginRight: 20,
      marginLeft: 20
  },
  title: {
      marginLeft: 20,
      position: 'absolute',
      fontFamily: "Airbnb Cereal App",
      color: 'white',
      marginTop: 250,
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  date: {
      marginLeft: 20,
      position: 'absolute',
      fontFamily: "Airbnb Cereal App",
      color: 'white',
      marginTop: 278,
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  rentbutton: {
      alignItems: 'center',
      width: 200,
      marginLeft: 75,
      marginTop: 75
  },
  textrent: {
      color: 'white',
      marginLeft: 75,
      fontFamily: "Airbnb Cereal App",
  },
  textreturn: {
    color: 'white',
    marginLeft: 30,
    fontFamily: "Airbnb Cereal App",
}
});

const mapStateToProps = state => {
  return {
    book: state.book
  };
};

export default connect(mapStateToProps)(Viewbook);
