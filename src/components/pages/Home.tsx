import React from 'react';
import { Linking } from 'react-native';
import { Text, Container } from 'native-base';
import * as WebBrowser from 'expo-web-browser'
import { NavProps } from '../../values/NavProps';
import NavTemplate from '../templates/NavTemplate';
import MyNovantApi from '../../system/MyNovant';
import { Appointment } from '../../values/Appointment';
import { AppointmentCard } from '../compounds/AppointmentCard';

export class Home extends React.Component<NavProps, { appointments: Appointment[], ready: boolean }> {
    state = { appointments: [], ready: false }

    componentDidMount = async () => {
        let appointments = await MyNovantApi.appointments();
        console.log("!!! APPTS ---> ", appointments);
        this.setState({ appointments, ready: true });
    }

    openNovantHealthWebsite = () => {
        WebBrowser.openBrowserAsync("https://www.novanthealth.org");
    };

    launchExternalApp = () => {
        Linking.openURL("YouTube://1krc73eU5yU");
    };

    render() {
        let { ready, appointments } = this.state;
        return (<NavTemplate
            pageTitle="Home"
            navigation={this.props.navigation}
        >
            <Text style={{
                fontSize: 16,
                fontFamily: 'Whitney_semi',
                paddingTop: 8,
                paddingBottom: 8
            }}>
                Upcoming Appointments
            </Text>
            {ready && <AppointmentCard {...appointments[0]} />}
        </NavTemplate>);
    }
}
