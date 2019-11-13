import React from 'react';
import { Linking } from 'react-native';
import { AppLoading } from 'expo';
import styles from '../../Style';
import { Container, Text, Footer, Header, Left, Button, Icon, Title, Body, Right, Content, FooterTab, Card, CardItem } from 'native-base';
import { Feather } from '@expo/vector-icons';
import * as Font from 'expo-font'
import * as WebBrowser from 'expo-web-browser'
import AlbumList from '../molecules/AlbumList';
import { NavProps } from '../../values/NavProps';

export class Welcome extends React.Component<NavProps, {
    isReady: boolean;
}> {
    state: {
        isReady: boolean;
    } = {
            isReady: false,
        };
    // async componentDidMount() {
    //     await Font.loadAsync({
    //         Roboto: require('../../../node_modules/native-base/Fonts/Roboto.ttf'),
    //         Roboto_medium: require('../../../node_modules/native-base/Fonts/Roboto_medium.ttf'),
    //         Whitney_book: require('../../../assets/Whitney-Book.otf'),
    //         ...Feather.font,
    //     });
    //     this.setState({ isReady: true });
    // }
    openNovantHealthWebsite = () => {
        console.log("NH");
        WebBrowser.openBrowserAsync("https://www.novanthealth.org");
    };
    launchExternalApp = () => {
        Linking.openURL("YouTube://1krc73eU5yU");
    };
    render() {
        if (!this.state.isReady) {
            return <AppLoading />;
        }
        return (<Container style={styles.container}>
            <Header>
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
