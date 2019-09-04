import Axios from "axios";
import { Alert } from "react-native";

export const userRegister = (username, name, email, password) => {
  return {
    type: "USER_REGISTER",
    payload: Axios.post("https://floating-sierra-16009.herokuapp.com/books/register", {
      data
    })
      .then(res => {
        if (res.status == 200) {
          Alert.alert(
            'Register Success',
            'Press Ok to redirect in login page',
            [
              {text: 'Ok', onPress: () => this.props.navigation.navigate('Login')},
            ],
            { cancelable: false }
          )
        } else {
          Alert.alert(
            'Register Failed',
            'Maybe Your Username or Email Already Taken',
            [
              { text: 'Ok, I want to change it', onPress: () => console.log(res) },
              { text: 'I have remember my account', onPress: () => this.props.navigation.navigate('Login') },
            ],
            { cancelable: true }
          )
        }
      })
      .catch(err => {
        console.log(err);
        Alert.alert(
          'Register Failed',
          'Maybe Your Username or Email Already Teken',
          [
            { text: 'Ok, I want to change it', onPress: () => console.log(err) },
            { text: 'I have remember my account', onPress: () => this.props.navigation.navigate('Login') },
          ],
          { cancelable: true }
        )
      })
  };
};

export const userLogin = (email, password) => {
  return {
    type: "USER_LOGIN",
    payload: Axios.post("https://floating-sierra-16009.herokuapp.com/books/login", {
      email,
      password
    })
      .then(res => {
        if (res.status == 200) {
          swal({
            title: "Login Success!",
            text: "Welcome Back " + res.data.name,
            buttons: false,
            timer: 3000,
            icon: "success"
          });
          window.localStorage.setItem("access_token","Bearer "+ res.data.acces_token);
          window.localStorage.setItem(
            "name",
            res.data.level + " " + res.data.name
          );
          // Axios.create({ baseURL: 'http://localhost:8888/', headers: { x_token: res.data.acces_token } });
          setInterval(() => (window.location = "/Home"), 3200);
        } else {
          swal("Login Failed", {
            text: res.data.message,
            buttons: false,
            timer: 3000,
            icon: "warning"
          });
        }
      })
      .catch(err => {
        console.log(err);
        swal({
          title: "Login Failed",
          text: "We Can't Found This Email",
          buttons: false,
          timer: 3000,
          icon: "warning"
        });
      })
  };
};
