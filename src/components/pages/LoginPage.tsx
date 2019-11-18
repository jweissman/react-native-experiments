import React from "react";
import {NavProps} from "../../values/NavProps";
import {Button, Container, Content, Grid, Header, Row, Text, Form, Item as FormItem, Input, Label} from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import styles, { palette } from "../../Style";
import { LoginTemplate } from "../templates/LoginTemplate";
import MyNovant from "../../system/MyNovant";

export default class LoginPage extends React.Component<NavProps> {
    handleLogin = async ({username, password}) => {
        let openTheDoor = await MyNovant.authenticate({user: username, pass: password});
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
                <Header>
                </Header>
                <Content contentContainerStyle={{ flex: 1 }} style={{ padding: 10 }}>
                    <LoginTemplate onSubmit={this.handleLogin} />
                </Content>
            </Container>
        )
    }
}