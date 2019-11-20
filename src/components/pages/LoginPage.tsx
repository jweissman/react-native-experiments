import React from "react";
import {NavProps} from "../../values/NavProps";
import { Container, Content, Header } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { palette } from "../../Style";
import { LoginTemplate } from "../templates/LoginTemplate";
import MyNovantApi from "../../system/MyNovant";

export default class LoginPage extends React.Component<NavProps> {
    handleLogin = async ({username, password}) => {
        let openTheDoor = await MyNovantApi.authenticate({user: username, pass: password});
        if (openTheDoor) {
            this.props.navigation.navigate("Welcome")
        }
    }

    render() {
        return (
            <Container>
                <LinearGradient
                    colors={[palette.fuschia, palette.aubergine]}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        height: '100%',
                    }}
                />
                <Content contentContainerStyle={{ flex: 1 }} style={{ padding: 10 }}>
                    <LoginTemplate onSubmit={this.handleLogin} />
                </Content>
            </Container>
        )
    }
}