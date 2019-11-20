import React from "react";
import {NavProps} from "../../values/NavProps";
import {
    Button,
    Container,
    Content,
    Text,
    Form,
    Item as FormItem,
    Input,
    Label,
    View
} from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import styles from "../../Style";
import NovantHealthLogo from "../../assets/novanthealthlogo";

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
                    <Content contentContainerStyle={{flex: 1}} style={{padding: 10, paddingTop: 80}}>
                        <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 50, paddingLeft: 50, paddingRight: 50, ...styles.bodyText}}>
                                <View style={{width: 169, height: 40, marginBottom: 20}}>
                                    <NovantHealthLogo/>
                                </View>
                                <Form style={{ width: '100%', marginBottom: 50}}>
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
                        </View>
                    </Content>
                </Container>
        )
    }

}