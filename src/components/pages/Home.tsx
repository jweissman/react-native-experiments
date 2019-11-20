import React from 'react';
import { Linking } from 'react-native';
import { palette } from '../../Style';
import { Text, Left, Icon, Body, Content, Card, CardItem, View, Grid, Row, Col } from 'native-base';
import * as WebBrowser from 'expo-web-browser'
import { NavProps } from '../../values/NavProps';
import NavTemplate from '../templates/NavTemplate';

export class Home extends React.Component<NavProps> {
    openNovantHealthWebsite = () => {
        WebBrowser.openBrowserAsync("https://www.novanthealth.org");
    };

    launchExternalApp = () => {
        Linking.openURL("YouTube://1krc73eU5yU");
    };

    render() {
        return (<NavTemplate
            pageTitle="Home"
            navigation={this.props.navigation}
        >
            <Text style={{ fontSize: 18, fontFamily: 'Whitney_book' }}>
                Upcoming Appointments
            </Text>
            <Card>
                <CardItem>
                    <Left style={{
                        flex: 1.2,
                        }}>
                        <Content style={{
                            backgroundColor: palette.wildsand,
                            borderRadius: 10,
                            margin: 5,
                        }}>
                            <View padder style={{
                                alignItems: 'center',
                                display: 'flex'
                            }}>
                                <Text>THURS</Text>
                                <Text style={{ flex: 1, fontWeight: 'bold' }}>
                                    Nov 31
                                </Text>
                                <Text style={{flex: 1}}>8:00 AM</Text>
                            </View>
                        </Content>
                    </Left>
                    <Body style={{ flex: 3, padding: 10 }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                            Knee Consultation
                        </Text>
                        <Grid>
                            <Col style={{ flex: 1 }}>
                                <Row>
                                    <Icon name='map' />
                                </Row>
                                <Row>
                                    <Icon name='briefcase' />
                                </Row>
                            </Col>
                            <Col style={{flex: 5}}>
                                <Row>
                                    <Text style={{ color: 'black', fontSize: 14, fontWeight: '300' }}>
                                        Novant Health Charlotte Orthopedic Hospital
                                    </Text>
                                </Row>
                                <Row>
                                    <Text style={{ fontSize: 14, fontWeight: '300' }}>
                                        Snow Brenner Daws
                                    </Text>
                                </Row>
                            </Col>
                        </Grid>
                        {/* <Text style={{fontSize: 14, fontWeight: '300'}}>
                            Novant Health Charlotte Orthopedic Hospital
                        </Text> */}
                        {/* <Text style={{ fontSize: 14, fontWeight: '300' }}>
                            <Icon name='briefcase' />
                            Snow Brenner Daws
                        </Text> */}
                    </Body>
                </CardItem>
            </Card>

            {/* <Text style={{ fontSize: 32, fontFamily: 'Whitney_book' }}>
                New Messages
            </Text>
            <Card>
                <CardItem>
                    <Body>
                        <Text>
                            Hi Emma, I've changed your prescription...
                        </Text>
                    </Body>
                </CardItem>
            </Card>

            <Text style={{ fontSize: 32, fontFamily: 'Whitney_book' }}>
                Wellness Reminder
            </Text>
            <Content padder>
                <Body>
                    <Text>Wash your hands</Text>
                </Body>
            </Content> */}
        </NavTemplate>);
    }
}
