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
  Icon,
  Content
} from "native-base";
import { Col, Grid } from "react-native-easy-grid";
import { userRegister } from "../public/redux/action/users";
import { connect } from "react-redux";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      email: "",
      password: ""
    };
  }

  handleRegister = async event => {
    event.preventDefault();
    if (
      this.state.name == "" ||
      this.state.username == "" ||
      this.state.email == "" ||
      this.state.password == ""
    ) {
      alert("Please fill all column");
    } else {
      const { username, name, email, password } = this.state;
      await this.props.dispatch(userRegister(username, name, email, password));
    }
  };

  render() {
    if (AsyncStorage.getItem("access_token") != null ) {
    return (
      <Container>
        <Content padder showsVerticalScrollIndicator={false}>
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
                Sign Up For Free !
              </Text>
              <Form style={{ marginRight: 40, marginTop: 25 }}>
                <Item stackedLabel>
                  <Label>Username</Label>
                  <Input
                    maxLength={8}
                    onChangeText={username => this.setState({ username })}
                    value={this.state.username}
                  />
                </Item>
                <Item stackedLabel>
                  <Label>Full Name</Label>
                  <Input
                    maxLength={16}
                    onChangeText={name => this.setState({ name })}
                    value={this.state.name}
                  />
                </Item>
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
                  androidRippleColor="white"
                  large
                  rounded
                  style={{
                    alignContent: "center",
                    marginTop: 50,
                    marginLeft: 260,
                    backgroundColor: "#4B4C72",
                    width: 60
                  }}
                  onPress={this.handleRegister}
                >
                  <Icon
                    active
                    name="arrow-forward"
                    style={{ fontSize: 35, margin: 0 }}
                  />
                </Button>
              </Form>
            </Col>
          </Grid>
          <Grid style={{ marginLeft: 20 }}>
            <Col>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate("Login")}
              >
                <Text
                  style={{
                    color: "#4B4C72",
                    fontFamily: "Airbnb Cereal App",
                    textDecorationLine: "underline"
                  }}
                >
                  Sign In
                </Text>
              </Button>
            </Col>
          </Grid>
        </Content>
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

export default connect(mapStateToProps)(Register);
// export default Register;
