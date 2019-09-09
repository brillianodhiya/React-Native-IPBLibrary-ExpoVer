import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import {
  Container,
  Content,
  Button,
  Footer,
  FooterTab,
  Icon,
  Text,
  Card,
  CardItem,
  Thumbnail,
  Right,
  Left,
  Badge,
  Header,
  Body,
  Title
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getRent } from "../public/redux/action/books";
import { connect } from "react-redux";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: []
    };
  }

  componentDidMount = async () => {
    await this.props.dispatch(getRent());
    this.setState({
      history: this.props.book.bookRent
    });
  };

  render() {
      return (
        <Container style={styles.container}>
          <Header style={styles.headerset}>
            <Left>
              <Button transparent>
                <Icon
                  style={styles.backbutton}
                  name="arrow-back"
                  onPress={() => this.props.navigation.goBack()}
                />
              </Button>
            </Left>
            <Body>
              <Title style={styles.titleset}>History</Title>
            </Body>
          </Header>
          <Content padder showsVerticalScrollIndicator={false}>
            <Content>

            {/* {this.state.history.map((history, index) => {
              return ( */}


              {/* // <TouchableOpacity
              //   onPress={() => this.props.navigation.navigate("Viewbook")}
              // >
              //   <Card>
              //     <CardItem>
              //       <Thumbnail
              //         style={styles.floatingimage}
              //         large
              //         square
              //         source={require("../../assets/card2.jpg")}
              //       />
              //       <Text style={styles.cardtext}>RWBY SWEIS</Text>
              //       <Badge success style={styles.badge}>
              //         <Text style={styles.badgetext}>Returned</Text>
              //       </Badge>
              //       <Right>
              //         <Icon name="arrow-forward" />
              //       </Right>
              //     </CardItem>
              //   </Card>
              // </TouchableOpacity> */}
                      <Container>
                          <Image style={styles.imagenotfound} source={require('../../assets/notfound.png')} />
                          <Text style={styles.historyempty}>History Empty</Text>
                      </Container> 
              {/* // )
              // })} */}

            </Content>

          </Content>
          <Footer style={styles.footertabicon}>
            <FooterTab style={styles.footertabiconlist}>
              <Button onPress={() => this.props.navigation.navigate("Home")}>
                <Icon style={styles.homeicon} name="home" type="AntDesign" />
              </Button>
              <Button
                light
                onPress={() => this.props.navigation.navigate("History")}
              >
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
      )
    }
  }


const styles = StyleSheet.create({
  footertabicon: {
    backgroundColor: "white"
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
  imagenotfound: {
    margin: 75
  },
  historyempty: {
    position: "absolute",
    fontFamily: "Airbnb Cereal App",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 250,
    marginLeft: 120,
    color: "#4B4C72"
  },
  cardtext: {
    fontFamily: "Airbnb Cereal App",
    fontSize: 20,
    color: "#4B4C72",
    marginLeft: 18
  },
  badgetext: {
    fontFamily: "Airbnb Cereal App",
    color: "white"
  },
  headerset: {
    backgroundColor: "white"
  },
  titleset: {
    color: "#4B4C72",
    fontFamily: "Airbnb Cereal App",
    fontSize: 25
  },
  backbutton: {
    color: "#4B4C72"
  }
});

const mapStateToProps = state => {
  return {
    book: state.book
  };
};

export default connect(mapStateToProps)(History);
