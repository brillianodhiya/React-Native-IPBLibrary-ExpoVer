import React, { Component } from "react";
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
import { ScrollView } from "react-native-gesture-handler";
import { userRegister } from "../public/redux/action/users";
import { connect } from "react-redux";

console.disableYellowBox=true;

const mapDispatchToProps = (dispatch) => ({
  userRegister: (username, name, email, password) =>
    dispatch(userRegister(username, name, email, password))
});

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      name: "",
      email: "",
      password: ""
    };
  }

  async userRegister(username, name, email, password) {
    if (username == "" || name == "" || email == "" || password) {
      alert("Opps Please Check The Column");
    } else {
      this.props.userRegister(username, name, email, password);
    }
  }

  render() {
    return (
      <Container>
        <ScrollView>
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
                    value={this.state.username}
                    onChangeText={username => this.setState({ username })}
                  />
                </Item>
                <Item stackedLabel>
                  <Label>Full Name</Label>
                  <Input
                    maxLength={16}
                    value={this.state.name}
                    onChangeText={name => this.setState({ name })}
                  />
                </Item>
                <Item stackedLabel>
                  <Label>Email</Label>
                  <Input
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                  />
                </Item>
                <Item stackedLabel>
                  <Label style={{ color: "#4B4C72" }}>Password</Label>
                  <Input
                    secureTextEntry
                    maxLength={16}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                  />
                </Item>
                <Button
                  androidRippleColor="white"
                  large
                  iconRight
                  rounded
                  style={{
                    alignSelf: "flex-end",
                    alignContent: "center",
                    marginTop: 50,
                    marginLeft: 260,
                    backgroundColor: "#4B4C72"
                  }}
                  onPress={() =>
                    this.userRegister(
                      this.state.username,
                      this.state.name,
                      this.state.email,
                      this.state.password
                    )
                  }
                >
                  <Text></Text>
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
        </ScrollView>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
// export default Register;
