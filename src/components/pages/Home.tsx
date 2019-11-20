import React from 'react';
import { Linking } from 'react-native';
import styles from '../../Style';
import { Container, Text, Footer, Header, Left, Button, Icon, Title, Body, Right, Content, FooterTab, Card, CardItem } from 'native-base';
import * as WebBrowser from 'expo-web-browser'
import AlbumList from '../molecules/AlbumList';
import { NavProps } from '../../values/NavProps';
import MyNovant from '../../system/MyNovant';
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
            navItems={{
                providers: {
                    goTo: "DoctorsPage",
                    iconName: "briefcase",
                    label: "My Providers",
                }
            }}
            navigation={this.props.navigation}
        >
            <Text style={{ fontSize: 32, fontFamily: 'Whitney_book' }}>
                Welcome to MyNovant!
            </Text>
            <Card>
                <CardItem>
                    <Body>
                        <Text>
                            How are you feeling today?
                        </Text>
                    </Body>
                </CardItem>
            </Card>
            <Content padder>
                <Text style={{ fontSize: 24 }}>Actions</Text>
                <Body>
                    <Button large iconLeft light onPress={this.openNovantHealthWebsite}>
                        <Icon name="heart"></Icon>
                        <Text>Novant Health site</Text>
                    </Button>
                    <Button large iconLeft light onPress={this.launchExternalApp}>
                        <Icon name="activity" type='Feather'></Icon>
                        <Text>Launch video visit</Text>
                    </Button>
                </Body>
            </Content>
        </NavTemplate>);
    }
}
