import React from "react";
import {NavProps} from "../../values/NavProps";
import {Button, Container, Content, Grid, Header, Row, Text, Form, Item as FormItem, Input, Label} from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import styles from "../../Style";

const palette = {
    aubergine: '#512D6D',
    fuschia: '#813ec1',
};

type State = { user: string, pass: string }

export class LoginPage extends React.Component<NavProps, State> {
    state = { user: '', pass: '' };
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
                            <Row style={{height: '20%'}}>
                                <Form style={{ width: '100%'}}>
                                    <FormItem floatingLabel>
                                        <Label style={{color: 'white'}}>Username</Label>
                                        <Input
                                            onChangeText={(text) => this.setState({ user: text })}
                                            value={this.state.user}
                                        />
                                    </FormItem>
                                    <FormItem floatingLabel>
                                        <Label style={{color: 'white'}}>Password</Label>
                                        <Input
                                            secureTextEntry={true}
                                            onChangeText={(text) => this.setState({ pass: text })}
                                            value={this.state.pass}
                                        />
                                    </FormItem>
                                </Form>
                            </Row>
                            <Row>
                                <Text style={{...styles.bodyText, color: 'white', fontSize: 18}}>
                                    Create Account
                                </Text>
                            </Row>
                            <Row>
                                <Button style={{
                                    // marginTop: 20,
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