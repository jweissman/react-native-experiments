import React, { Component } from 'react';
import { createSwitchNavigator } from "react-navigation";
import { createAppContainer } from "react-navigation";
import { NavigationStackProp } from 'react-navigation-stack';
import { Doctor } from './src/values/Doctor';
import MyDoctorDetailsPage from './src/components/pages/MyDoctorDetailsPage';
import MyDoctorsPage from './src/components/pages/MyDoctorsPage';
import { Welcome } from './src/components/pages/Welcome';
import { Container } from "native-base";
import DoctorProvider from './src/contexts/DoctorProvider';

const AppNavigation = createSwitchNavigator(
    {
        Welcome: { screen: Welcome },
        DoctorsPage: { screen: MyDoctorsPage },
        DoctorDetailView: { screen: MyDoctorDetailsPage }
    },
);

const AppContainer = createAppContainer(AppNavigation);

class App extends Component {
    render() {
        return <DoctorProvider>
            <AppContainer />
        </DoctorProvider>;
    }

}

export default App;