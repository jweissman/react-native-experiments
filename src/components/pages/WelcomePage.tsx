import React from 'react';
import { Linking } from 'react-native';
import styles from '../../Style';
import { Container, Text, Footer, Header, Left, Button, Icon, Title, Body, Right, Content, FooterTab, Card, CardItem } from 'native-base';
import * as WebBrowser from 'expo-web-browser'
import AlbumList from '../molecules/AlbumList';

export class Welcome extends React.Component {
    openNovantHealthWebsite = () => {
        WebBrowser.openBrowserAsync("https://www.novanthealth.org");
    };

    launchExternalApp = () => {
        Linking.openURL("YouTube://1krc73eU5yU");
    };

    render() {
        return (<Container style={styles.container}>
            <Header style={styles.header}>
                <Left>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title testID="PageTitle">My Novant!</Title>
                </Body>
                <Right />
            </Header>
            <Content padder>
                <Text style={{ fontSize: 32 }}>
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

                        <AlbumList />
                    </Body>
                </Content>
            </Content>
            <Footer>
                <FooterTab>
                    <Button testID="GoToDoctorsList" onPress={() => this.props.navigation.navigate("DoctorsPage")}>
                        <Text>My Doctors!</Text>
                    </Button>
                    <Button full>
                        <Text>Remarkable!</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>);
    }
}
