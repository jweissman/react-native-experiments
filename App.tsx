import React, { Component } from 'react';
import { createSwitchNavigator } from "react-navigation";
import { createAppContainer } from "react-navigation";
import { NavigationStackProp } from 'react-navigation-stack';
import { Doctor } from './src/values/Doctor';
import MyDoctorDetailsPage from './src/components/pages/MyDoctorDetailsPage';
import MyDoctorsPage from './src/components/pages/MyDoctorsPage';
import { Welcome } from './src/components/pages/Welcome';
import { Container } from "native-base";
import { Feather } from '@expo/vector-icons';
import * as Font from 'expo-font'

import DoctorProvider from './src/contexts/DoctorProvider';
import {LoginPage} from "./src/components/pages/LoginPage";
import {AppLoading} from "expo";

const AppNavigation = createSwitchNavigator(
    {
        Login: { screen: LoginPage },
        Welcome: { screen: Welcome },
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