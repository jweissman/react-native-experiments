import React from "react";
import { Image } from "react-native";
import { Container, Text, Header, Left, Button, Icon, Body, Right, Content, Footer, FooterTab, Title, View } from "native-base";
import styles, { palette } from "../../Style";
import MyNovantApi from "../../system/MyNovant";
import { NavProps } from "../../values/NavProps";
import BottomNav from "../compounds/BottomNav";
import NovantHealthLogo from '../../assets/novanthealthlogo'

type Props = {
    pageTitle: string
}

class NavTemplate extends React.Component<Props & NavProps> {
    visitProviders = () => {
        this.props.navigation.navigate("DoctorsPage");
    }

    goHome = () => {
        this.props.navigation.navigate("Welcome")
    }

    handleLogout = () => {
        MyNovantApi.logout();
        this.props.navigation.navigate("Login");
    }

    render() {
        return <Container style={styles.container}>
            <Header style={{ backgroundColor: palette.aubergine }}>
                <Left style={{ flex: 1 }}>
                    <Button transparent>
                        <Icon name='menu' style={{ color: 'white' }} />
                    </Button>
                </Left>
                <Body style={{ flex: 1 }}>
                    <NovantHealthLogo />
                </Body>
                <Right style={{ flex: 1 }}>
                    <Button
                        testID="Logout"
                        onPress={this.handleLogout}
                        style={{ ...styles.button }}
                    >
                        <Text>Logout</Text>
                    </Button>
                </Right>
            </Header>
            <View style={{
                height: 45,
                backgroundColor: palette.bossanova,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginTop: -2
            }}>
                <Title testID="PageTitle" style={{
                    ...styles.bodyText,
                    fontSize: 18,
                    color: 'white',
                }}>
                    {this.props.pageTitle}
                </Title>
            </View>

            <Content padder>
                {this.props.children}
            </Content>

            <BottomNav
                items={[
                    {
                        label: "My Doctors",
                        testID: "MyDoctorsNavButton",
                        onPress: this.visitProviders,
                        active: this.props.pageTitle === "My Providers",
                        iconName: "briefcase",
                    },
                    {
                        label: "Home",
                        testID: "HomeNavButton",
                        onPress: this.goHome,
                        active: this.props.pageTitle === "Home",
                        iconName: "home",
                    },
                ]}
            />
        </Container>;
    }
}

export default NavTemplate;