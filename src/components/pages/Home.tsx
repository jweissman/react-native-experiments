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
            <Card style={{borderRadius: 12}}>
                <CardItem style={{borderRadius: 12, height: 90}}>
                    <Left style={{flex: 1, height: '100%', justifyContent: 'center'}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                            <Image
                                style={{ width: 32, height: 32, borderRadius: 16, marginRight: 12 }}
                                source={{ uri: "https://source.unsplash.com/random?person" }} />
                        </View>
                    </Left>
                    <Body style={{ flex: 6, justifyContent: "space-between" }}>
                        <View 
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: '100%',
                                justifyContent: 'space-between',
                            }}>
                            <Text
                                style={{
                                    // flex: 10,
                                    fontSize: 16,
                                    fontFamily: "Whitney_semi"
                                }}
                            >
                                Dr. Sherry Yanez
                            </Text>
                            <View style={{
                                flexDirection: 'row',
                                height: 16,
                                alignItems: 'center',
                            }}>
                                <Text
                                    style={{
                                        color: palette.warmGrey,
                                        fontSize: 14,
                                        marginRight: 6,
                                    }}
                                >The Time</Text>
                                <Icon
                                    name="arrow-forward"
                                    style={{
                                        color: palette.coolGrey,
                                        fontSize: 16,
                                    }}
                                />
                            </View>
                        </View>

                        <Text
                            style={{
                                fontSize: 16,
                                fontFamily: "Whitney_book"
                            }}
                        >
                            Come in for a check up please
                        </Text>

                        <Text
                            style={{
                                fontSize: 14,
                                fontFamily: "Whitney_book",
                                color: 'gray'
                            }}
                            numberOfLines={1}
                        >
                            We'd like to see you next Wednesday
                            for a check-up regarding the issues
                            that were uncovered during your last visit
                            to the clinic
                        </Text>
                    </Body>
                </CardItem>
            </Card>

        </NavTemplate>);
    }
}
