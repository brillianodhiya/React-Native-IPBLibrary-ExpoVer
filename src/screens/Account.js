import React, { Component } from "react";
import { StyleSheet, AsyncStorage } from "react-native";
import {
    Container, Content, Button, Footer, FooterTab, Icon, ListItem, Left, Body, Right, Text, Header, Title
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
        };
      }

    componentDidMount = async () => {
        try {
            const value = await AsyncStorage.getItem('name');
            if (value !== null) {
                console.log(value)
                this.setState({
                    name: value
                })
            }
        } catch(err) {
            console.log(err)
        }
    }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.headerset}>
            <Left>
                <Button transparent>
                    <Icon style={styles.backbutton} name="arrow-back" onPress={() => this.props.navigation.goBack()} />
                </Button>
            </Left>
            <Body>
                <Title style={styles.titleset}>
                    Account
                </Title>
            </Body>
        </Header>  
        <Content padder>
        <TouchableOpacity>
            <ListItem icon>
                <Left>
                    <Button style={{ backgroundColor: '#FF9501' }}>
                        <Icon active name="persona" type="Zocial" />
                    </Button>
                </Left>
                <Body>
                    <Text>{this.state.name}</Text>
                </Body>
                <Right>
                    <Text>User</Text>
                </Right>
            </ListItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('History')}>
            <ListItem icon>
                <Left>
                    <Button style={{ backgroundColor: '#007AFF' }}>
                        <Icon active name="history" type="Octicons" />
                    </Button>
                </Left>
                <Body>
                    <Text>History</Text>
                </Body>
                <Right>
                    <Icon active name="arrow-forward" />
                </Right>
            </ListItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Request')}>
            <ListItem icon>
                <Left>
                    <Button style={{ backgroundColor: '#4CDA64' }}>
                        <Icon active name="book-multiple-plus" type="MaterialCommunityIcons" />
                    </Button>
                </Left>
                <Body>
                    <Text>Book Request</Text>
                </Body>
                <Right>
                    <Icon active name="arrow-forward" />
                </Right>
            </ListItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Logout')}>
            <ListItem icon>
                <Left>
                    <Button style={{ backgroundColor: '#FD3C2D' }}>
                        <Icon active name="logout-variant" type="MaterialCommunityIcons" />
                    </Button>
                </Left>
                <Body>
                    <Text>Logout</Text>
                </Body>
                <Right>
                    <Icon active name="arrow-forward" />
                </Right>
            </ListItem>
            </TouchableOpacity>
        </Content>
        <Footer style={styles.footertabicon}>
            <FooterTab style={styles.footertabiconlist}>
              <Button onPress={() => this.props.navigation.navigate('Home')}>
                <Icon style={styles.homeicon} name="home" type="AntDesign" />
              </Button>
              <Button onPress={() => this.props.navigation.navigate('History')}>
                <Icon style={styles.historyicon} name="history" type="MaterialIcons" />
              </Button>
              <Button light onPress={() => this.props.navigation.navigate('Account')}>
                <Icon style={styles.accounticon} name="account-circle-outline" type="MaterialCommunityIcons" />
              </Button>
            </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    footertabicon: {
        backgroundColor: 'white'
    },
    footertabiconlist: {
        backgroundColor: 'white',
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
    headerset: {
        backgroundColor: 'white'
    },
    titleset: {
        color: "#4B4C72",
        fontFamily: "Airbnb Cereal App",
        fontSize: 25,
    },
    backbutton: {
        color: "#4B4C72",
    }
});

export default Account;
