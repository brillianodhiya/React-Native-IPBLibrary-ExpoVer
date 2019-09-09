import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import {
  Container, Content, Button, Footer, FooterTab, Icon, Text, Card, CardItem, Thumbnail, Right, Left, Badge, Header, Body, Title, Form, Item, Label, Input
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";


class RequestBook extends Component {
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
                    Book Request
                </Title>
            </Body>
        </Header>
        <Content padder showsVerticalScrollIndicator={false}>
            <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>Title</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel>
                        <Label>Description</Label>
                        <Input />
                    </Item>
                    
                </Form>
            </Content>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
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

export default RequestBook;
