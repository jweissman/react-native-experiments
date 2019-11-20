import React, { Component } from 'react';
import { createSwitchNavigator } from "react-navigation";
import { createAppContainer } from "react-navigation";
import { NavigationStackProp } from 'react-navigation-stack';
import { Doctor } from './src/values/Doctor';
import MyDoctorDetailsPage from './src/components/pages/MyDoctorDetailsPage';
import MyDoctorsPage from './src/components/pages/MyDoctorsPage';
import { Home } from './src/components/pages/Home';
import { Container } from "native-base";
import { Feather } from '@expo/vector-icons';
import * as Font from 'expo-font'

import DoctorProvider from './src/contexts/DoctorProvider';
import {AppLoading} from "expo";
import LoginPage from './src/components/pages/LoginPage';

const AppNavigation = createSwitchNavigator(
    {
        Login: { screen: LoginPage },
        Welcome: { screen: Home },
        DoctorsPage: { screen: MyDoctorsPage },
        DoctorDetailView: { screen: MyDoctorDetailsPage }
    },
);

const AppContainer = createAppContainer(AppNavigation);

class App extends Component<{}, { isReady: boolean }> {
    state = { isReady: false }

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('./node_modules/native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('./node_modules/native-base/Fonts/Roboto_medium.ttf'),
            Whitney_book: require('./assets/Whitney-Book.otf'),
            Whitney_bold: require('./assets/Whitney-Bold.otf'),
            ...Feather.font,
        });
        this.setState({ isReady: true });
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading />;
        }

        return <DoctorProvider>
            <AppContainer />
        </DoctorProvider>;
    }

}

export default App;