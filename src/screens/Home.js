import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import {
  Container,
  Header,
  Button,
  Icon,
  Item,
  Input,
  Content,
  Text,
  Card,
  CardItem,
  Left,
  Footer,
  FooterTab,
  Body,
  View,
  Spinner
} from "native-base";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import randomColor from "randomcolor";
import { AirbnbRating } from "react-native-ratings";
import { connect } from "react-redux";
import { getBooks } from "../public/redux/action/books";
import { getGenres } from "../public/redux/action/genres";
import Navigationservice from "../components/Navigationservice";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getBooks: [],
      getGenres: [],
      search: ''
    };
  }

  componentDidMount = async () => {
    await this.props.dispatch(getBooks(this.state.search));
    await this.props.dispatch(getGenres());
    this.setState({
      getBooks: this.props.book
    });
    this.setState({
      getGenres: this.props.genres
    })
  };

  handleSearch = async () => {
    await this.props.dispatch(getBooks(this.state.search));
    Navigationservice.navigate('Home', {
      keyword: this.state.search
    })
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header searchBar rounded style={styles.headersearch}>
          <Text style={styles.title}>IPBLibrary</Text>
          <Item style={styles.inputsearch}>
            <Button transparent onPress={() => this.handleSearch()}>
              <Icon name="ios-search" />
            </Button>
            <Input placeholder="Search" 
            onChangeText={search => this.setState({ search })}
            value={this.state.search}
            />
          </Item>
        </Header>

        <Content padder showsVerticalScrollIndicator={false}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {this.state.getGenres.genreList ? (
            this.state.getGenres.genreList.map((genre, index) => {
              return (
                <TouchableOpacity key={index}>
              <Card style={styles.cardcontainer}>
                <CardItem style={styles.carditemcontainer}>
                  <Left>
                    <Text style={styles.cardtext}>{genre.keterangan}</Text>
                  </Left>
                  <Image
                    style={styles.imagecard}
                    source={require("../../assets/genrebook.png")}
                    />
                </CardItem>
              </Card>
            </TouchableOpacity>
            )
          })
        ): <Spinner color='blue' />}
          </ScrollView>
          <Text style={styles.titlestyle}>List Book</Text>
          <ScrollView horizontal={false} showsHorizontalScrollIndicator={true}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' , flex: 1 }}>
            {this.state.getBooks.bookList ? (
              this.state.getBooks.bookList.map((books, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => this.props.navigation.navigate("Viewbook", {
                      idbooks: books.idbooks
                    })}
                  >
                    <Card noShadow style={{ margin: 15, width: 160 }} pointerEvents="none">
                      <CardItem style={styles.cardlistdowncontainer}>
                        <View>
                        <Image
                          source={{ uri: books.image }}
                          style={styles.cardlistdown}
                        />
                        </View>
                      </CardItem>
                      <CardItem>
                        <Body>
                          <Text style={styles.titlebook}>{books.title.substring(0,12)}...</Text>
                          <AirbnbRating
                            style={{ margin: 0 }}
                            size={10}
                            showRating={false}
                            isDisabled={true}
                            reviews={false}
                          />
                        </Body>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
                );
              })
            ) : (
              <Spinner color='blue' />
            )}
            </View>
          </ScrollView>
        </Content>
        <Footer style={styles.footertabicon}>
          <FooterTab style={styles.footertabiconlist}>
            <Button
              light
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Icon style={styles.homeicon} name="home" type="AntDesign" />
            </Button>
            <Button onPress={() => this.props.navigation.navigate("History")}>
              <Icon
                style={styles.historyicon}
                name="history"
                type="MaterialIcons"
              />
            </Button>
            <Button onPress={() => this.props.navigation.navigate("Account")}>
              <Icon
                style={styles.accounticon}
                name="account-circle-outline"
                type="MaterialCommunityIcons"
              />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const colorBg = randomColor({
  luminosity: "dark"
});

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
    borderRadius: 50
  },
  title: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 20,
    fontSize: 25,
    fontFamily: "Airbnb Cereal App",
    fontWeight: "bold",
    color: "#4B4C72"
  },
  cardcontainer: {
    borderRadius: 10,
    width: 280,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20
  },
  carditemcontainer: {
    backgroundColor: `${colorBg}`,
    borderRadius: 10
  },
  cardtext: {
    fontFamily: "Airbnb Cereal App",
    fontSize: 25,
    color: "white",
    fontWeight: "bold"
  },
  imagecard: {
    resizeMode: "contain",
    flex: 1,
    height: 140,
    marginLeft: 0
  },
  footertabiconlist: {
    backgroundColor: "white"
  },
  homeicon: {
    color: "#4B4C72"
  },
  historyicon: {
    color: "#4B4C72"
  },
  accounticon: {
    color: "#4B4C72"
  },
  titlestyle: {
    color: "#4B4C72",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Airbnb Cereal App",
    marginBottom: 10
  },
  cardlistdown: {
    resizeMode: "contain",
    flex: 1,
    width: 130,
    height: 'auto'
  },
  cardlistdowncontainer: {
    height: 195,
  },
  titlebook: {
    fontFamily: "Airbnb Cereal App",
    color: "#4B4C72",
    fontSize: 18,
    fontWeight: "bold"
  }
});

const mapStateToProps = state => {
  return {
    book: state.book,
    genres: state.genres
  };
};

export default connect(mapStateToProps)(Home);
