import Axios from "axios";
import { AsyncStorage } from "react-native";
import { Alert } from "react-native";
import NavigationService from "../../../components/Navigationservice";

export const userRegister = (username, name, email, password) => {
  return {
    type: "USER_REGISTER",
    payload: Axios.post("http://192.168.6.155:8888/books/register", {
      username,
      name,
      email,
      password
    })
      .then(res => {
        if (res.status == 200) {
          Alert.alert(
            "Register Success",
            "Press Ok to redirect in login page",
            [
              {
                text: "Ok",
                onPress: () => NavigationService.navigate("Login")
              }
            ],
            { cancelable: false }
          );
        } else {
          Alert.alert(
            "Register Failed",
            "Maybe Your Username or Email Already Taken",
            [
              {
                text: "Ok, I want to change it",
                onPress: () => console.log(res)
              },
              {
                text: "I have remember my account",
                onPress: () => NavigationService.navigate("Login")
              }
            ],
            { cancelable: true }
          );
        }
      })
      .catch(err => {
        console.log(err);
        Alert.alert(
          "Register Failed",
          "Maybe Your Username or Email Already Teken",
          [
            {
              text: "Ok, I want to change it",
              onPress: () => console.log(err)
            },
            {
              text: "I have remember my account",
              onPress: () => NavigationService.navigate("Login")
            }
          ],
          { cancelable: true }
        );
      })
  };
};

export const userLogin = (email, password) => {
  return {
    type: "USER_LOGIN",
    payload: Axios.post(
      "http://192.168.6.155:8888/books/login",
      {
        email,
        password
      }
    )
      .then(res => {
        if (res.status == 200) {
          AsyncStorage.setItem(
            "access_token",
            "Bearer " + res.data.acces_token
            )
            AsyncStorage.setItem(
              "name",
              res.data.name
              )
              Alert.alert(
                `Welcome Back`,
                `${res.data.name}`,
                [
                  {
                    text: 'Ok',
                    onPress: () => NavigationService.navigate('Home')
                  },
                ],
                {
                  cancelable: false
                }
              )
            } else {
          Alert.alert(
            "Login Failed",
            "We Can't Found This Email",
            [
              {
                text: "I dont have Account",
                onPress: () => NavigationService.navigate("Register")
              },
              {
                text: "Ok, I have remembered",
                onPress: () => console.log(res)
              }
            ],
            { cancelable: true }
          )
        }
      })
      .catch(err => {
        console.log(err);
        Alert.alert(
          "Login Failed",
          "We Can't Found This Email",
          [
            {
              text: "I dont have Account",
              onPress: () => NavigationService.navigate("Register")
            },
            {
              text: "Ok, I have remembered",
              onPress: () => console.log(err)
            }
          ],
          { cancelable: true }
        )
      })
  };
};
