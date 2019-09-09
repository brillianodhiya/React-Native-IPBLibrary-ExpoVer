import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import { Provider } from 'react-redux';

import store from './src/public/redux/store';

import NavigationService from "./src/components/Navigationservice";

import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import Viewbook from "./src/screens/Viewbook";
import History from "./src/screens/History";
import Account from "./src/screens/Account";
import RequestBook from "./src/screens/Request";


const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      header: null
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Viewbook: {
    screen: Viewbook,
    navigationOptions: {
      headerTransparent: {
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0,
        color: 'white',
      },
    }
  },
  History: {
    screen: History,
    navigationOptions: {
      header: null
    }
  },
  Account: {
    screen: Account,
    navigationOptions: {
      header: null
    }
  },
  Request: {
    screen: RequestBook,
    navigationOptions: {
      header: null
    }
  }
})

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
      'Airbnb Cereal App': require('./assets/fonts/AirbnbCerealBook.ttf'),
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Provider store={store}>
        <AppContainer ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef)
        }} />
      </Provider>
    );
  }
}
