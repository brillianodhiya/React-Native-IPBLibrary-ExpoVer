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

class Login extends Component {
  render() {
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
                <Input />
              </Item>
              <Item stackedLabel>
                <Label style={{ color: "#4B4C72" }}>Password</Label>
                <Input secureTextEntry maxLength={16} />
              </Item>
              <Button
                onPress={() => this.props.navigation.navigate('Home')}
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
  }
}

export default Login;
