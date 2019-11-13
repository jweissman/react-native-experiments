import React from "react";
import {NavProps} from "../../values/NavProps";
import {Button, Col, Container, Content, Footer, Grid, Header, Row, Text} from 'native-base';

import { LinearGradient } from 'expo-linear-gradient';
import {View} from "react-native";
import * as Font from "expo-font";
import {Feather} from "@expo/vector-icons";
import styles from "../../Style";


const palette = {
    aubergine: '#512D6D',
    fuschia: '#813ec1',
    // purple: 'rgb(119,58,176)',
};

export class LoginPage extends React.Component<NavProps, { isReady: boolean }> {

    render() {
        return (
                <Container
                >
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
                    <Content contentContainerStyle={{flex: 1}} style={{padding: 10}}>
                        <Grid style={{alignItems: 'center', ...styles.bodyText}}>
                            <Row><Text style={{color: 'white', ...styles.bodyText}}>LOGO</Text></Row>
                            <Row><Text style={{color: 'white'}}>USER</Text></Row>
                            <Row><Text style={{color: 'white'}}>PASS</Text></Row>
                            <Row>
                                <Button style={{
                                    height: 50,
                                    borderRadius: 35,
                                    padding: 50,
                                    backgroundColor: palette.fuschia,
                                }}>
                                    <Text style={{
                                        color: 'white',
                                        ...styles.bodyText,
                                        fontSize: 22,
                                    }}>Log In</Text>
                                </Button>
                            </Row>
                            <Row><Text style={{color: 'white'}}>GAP</Text></Row>
                            <Row><Text style={{color: 'white'}}>PROVIDER_BUTTON</Text></Row>
                            <Row><Text style={{color: 'white'}}>LOCATION_BUTTON</Text></Row>
                        </Grid>
                    </Content>
                </Container>
        )
    }

}