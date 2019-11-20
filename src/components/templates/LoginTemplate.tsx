import React from 'react';
import {Text, Form, Item as FormItem, Label, Input, Button, Row, Grid, View} from 'native-base';
import styles, { palette } from '../../Style';
import { env } from '../../system/MyNovant';
import NovantHealthLogo from '../../assets/novanthealthlogo'

type Props = {
    onSubmit: ({ username, password }: { username: string, password: string }) => void
}

type State = { username: string, password: string };

export class LoginTemplate extends React.Component<Props, State> {
    state = {
        username: env.user,
        password: env.pass,
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
        return <View style={{ alignItems: 'center', ...styles.bodyText, paddingTop: 120, paddingLeft: 20, paddingRight: 20 }}>
            <View style={{width: 166, height: 40, marginBottom: 65}}>
                <NovantHealthLogo />
            </View>
                <Form style={{ width: '100%', marginBottom: 40 }}>
                    <FormItem floatingLabel style={{marginLeft: 0, marginBottom: 20}}>
                        <Label style={{ color: 'rgba(255, 255, 255, 0.5)', marginBottom: 40 }}>Username</Label>
                        <Input
                            testID="username"
                            onChangeText={(text) => this.setState({ username: text })}
                            value={this.state.username}
                            style={{ color: 'white', marginLeft: 0 }}
                        />
                    </FormItem>
                    <FormItem floatingLabel style={{marginLeft: 0}}>
                        <Label style={{ color: 'white' }}>Password</Label>
                        <Input
                            testID="password"
                            secureTextEntry={true}
                            onChangeText={(text) => this.setState({ password: text })}
                            value={this.state.password}
                            style={{ color: 'white' }}
                        />
                    </FormItem>
                </Form>

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
        </View>;
    }
}