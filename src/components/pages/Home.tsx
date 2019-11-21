import React from 'react';
import { Image, Linking } from 'react-native';
import { Text, Icon, Container, Card, CardItem, Left, Body, View } from 'native-base';
import * as WebBrowser from 'expo-web-browser'
import { NavProps } from '../../values/NavProps';
import NavTemplate from '../templates/NavTemplate';
import MyNovantApi from '../../system/MyNovant';
import { Appointment } from '../../values/Appointment';
import { AppointmentCard } from '../compounds/AppointmentCard';
import { palette } from '../../Style';
import MessageCard from '../compounds/MessageCard';

type State = {
    appointments: Appointment[],
    messages: Message[],
    ready: boolean
}

export class Home extends React.Component<NavProps, State> {
    state = { appointments: [], messages: [], ready: false }

    componentDidMount = async () => {
        let appointments = await MyNovantApi.appointments();
        let messages = await MyNovantApi.messages();
        console.log("---> GOT MESSAGES", { messages })
        this.setState({ appointments, messages, ready: true });
    }

    openNovantHealthWebsite = () => {
        WebBrowser.openBrowserAsync("https://www.novanthealth.org");
    };

    launchExternalApp = () => {
        Linking.openURL("YouTube://1krc73eU5yU");
    };

    render() {
        let { ready, appointments, messages } = this.state;
        return (<NavTemplate
            pageTitle="Home"
            navigation={this.props.navigation}
        >
            <Text style={{
                fontSize: 16,
                fontFamily: 'Whitney_semi',
                paddingTop: 12,
                paddingBottom: 12
            }}>
                Upcoming Appointments
            </Text>
            {ready && <AppointmentCard {...appointments[0]} />}

            <Text style={{
                fontSize: 16,
                fontFamily: 'Whitney_semi',
                paddingTop: 24,
                paddingBottom: 12
            }}>
                New Messages
            </Text>
            {ready && <MessageCard {...messages[0]} />}
        </NavTemplate>);
    }
}
