import React from 'react';
import { Text, Form, Item as FormItem, Label, Input, Button, Row, Grid } from 'native-base';
import styles, { palette } from '../../Style';
import { env } from '../../system/MyNovant';

type Props = {
    onSubmit: ({ username, password }: { username: string, password: string }) => void
}

type State = { username: string, password: string };

export class LoginTemplate extends React.Component<Props, State> {
    state = {
        username: "",
        password: "",
    };

    maySubmit = () => {
        let loginEnabled = !!this.state.username && !!this.state.password
        return loginEnabled
    }

    handleSubmit = () => {
        this.props.onSubmit({
           username: this.state.username,
           password: this.state.password
        });
    }

    render() {
        return <Grid style={{ alignItems: 'center', ...styles.bodyText }}>
            <Row><Text style={{ color: 'white', ...styles.bodyText }}>LOGO</Text></Row>
            <Row style={{ height: '20%' }}>
                <Form style={{ width: '100%' }}>
                    <FormItem floatingLabel>
                        <Label style={{ color: 'white' }}>Username</Label>
                        <Input
                            testID="username"
                            onChangeText={(text) => this.setState({ username: text })}
                            value={this.state.username}
                        />
                    </FormItem>
                    <FormItem floatingLabel>
                        <Label style={{ color: 'white' }}>Password</Label>
                        <Input
                            testID="password"
                            secureTextEntry={true}
                            onChangeText={(text) => this.setState({ password: text })}
                            value={this.state.password}
                        />
                    </FormItem>
                </Form>
            </Row>

            <Row>
                <Button
                    testID="loginButton"
                    style={{
                        height: 50,
                        borderRadius: 35,
                        padding: 50,
                        backgroundColor: this.maySubmit()
                          ? 'white'
                          : palette.royalPurple
                    }}
                    onPress={this.handleSubmit}
                    disabled={!this.maySubmit()}
                >
                    <Text style={{
                        color: this.maySubmit() ? 'black' : 'rgba(255,255,255,0.5)',
                        ...styles.bodyText,
                        fontSize: 16,
                        fontFamily: 'Whitney_bold',
                    }}>Login</Text>
                </Button>
            </Row>
            <Row>
                <Text style={{ ...styles.bodyText, color: 'white', fontSize: 18 }}>
                    Forgot your Password?
                </Text>
            </Row>
            <Row><Text style={{ color: 'white' }}>GAP</Text></Row>
            <Row>
                <Text style={{ ...styles.bodyText, color: 'white', fontSize: 18 }}>
                    Create Account
                </Text>
            </Row>
        </Grid>;
    }
}