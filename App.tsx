import React, { Component } from 'react';
import { createSwitchNavigator } from "react-navigation";
import { createAppContainer } from "react-navigation";
import MyDoctorDetailsPage from './src/components/pages/MyDoctorDetailsPage';
import MyDoctorsPage from './src/components/pages/MyDoctorsPage';
import { Welcome } from './src/components/pages/WelcomePage';
import DoctorProvider from './src/contexts/DoctorProvider';
import LoginPage from './src/components/pages/LoginPage';

import { Feather } from '@expo/vector-icons';
import * as Font from 'expo-font'
import { AppLoading } from 'expo';

const AppNavigation = createSwitchNavigator(
    {
        Login: { screen: LoginPage },
        Welcome: { screen: Welcome },
        DoctorsPage: { screen: MyDoctorsPage },
        DoctorDetailView: { screen: MyDoctorDetailsPage }
    },
);

const AppContainer = createAppContainer(AppNavigation);

type State = { isReady: boolean }

class App extends Component<{}, State> {
    state = { isReady: false }; 
    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Feather.font,
        });
        console.log("READY");
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