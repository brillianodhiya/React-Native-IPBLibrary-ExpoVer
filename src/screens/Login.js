import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import {
  Container,
  Text,
  Form,
  Item,
  Label,
  Input,
  Thumbnail,
  Button,
  Icon
} from "native-base";
import { Col, Grid } from "react-native-easy-grid";
import { userLogin } from "../public/redux/action/users";
import { connect } from "react-redux";
import { createStackNavigator, createAppContainer } from 'react-navigation';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleLogin = async event => {
    event.preventDefault();
    if (
      this.state.email == "" ||
      this.state.password == ""
    ) {
      alert("Please fill all column")
    } else {
      const { email, password } = this.state;
      await this.props.dispatch(userLogin(email, password));
    }
  }
  render() {
    if (AsyncStorage.getItem("access_token") !== null ) {
    return (
      <Container>
        <Grid>
          <Col style={{ width: "100%" }}>
            <Thumbnail
              style={{ marginLeft: 290, marginTop: 10 }}
              square
              source={require("../icon/bookshelf.png")}
            />
            <Text
              style={{
                paddingTop: 50,
                fontSize: 40,
                marginLeft: 10,
                color: "#4B4C72",
                fontFamily: "Airbnb Cereal App"
              }}
            >
              Here To Get Welcomed !
            </Text>
            <Form style={{ marginRight: 40, marginTop: 25 }}>
              <Item stackedLabel>
                <Label>Email</Label>
                <Input
                  onChangeText={email => this.setState({ email })}
                  value={this.state.email}
                />
              </Item>
              <Item stackedLabel>
                <Label style={{ color: "#4B4C72" }}>Password</Label>
                <Input 
                  secureTextEntry 
                  maxLength={16} 
                  onChangeText={password => this.setState({ password })}
                  value={this.state.password}
                />
              </Item>
              <Button
                onPress={this.handleLogin}
                androidRippleColor="white"
                large
                iconRight
                rounded
                style={{ alignSelf: 'flex-end', alignContent: 'center', marginTop: 50, marginLeft: 260, backgroundColor: '#4B4C72' }}
              >
                <Text></Text>
                <Icon active name="arrow-forward" style={{ fontSize: 35, margin: 0 }} />
              </Button>
            </Form>
          </Col>
        </Grid>
        <Grid style={{ marginTop: 430, marginLeft: 20 }}>
          <Col>
            <Button transparent onPress={() => this.props.navigation.navigate('Register')}>
                <Text style={{ color: '#4B4C72', fontFamily: "Airbnb Cereal App", textDecorationLine:'underline' }}>Sign Up</Text>
            </Button>
          </Col>
          <Col style={{ marginLeft: 20 }}>
            <Button transparent>
                <Text style={{ color: '#4B4C72', fontFamily: "Airbnb Cereal App", textDecorationLine:'underline' }}>Forgot Password</Text>
            </Button>
          </Col>
        </Grid>
      </Container>
    );
    } else {
      return (this.props.navigation.navigate("Home"))
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Login);
