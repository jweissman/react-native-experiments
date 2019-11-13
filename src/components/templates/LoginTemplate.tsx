import React, { Component } from 'react';
import {
  Container,
  Header,
  Button,
  Text,
  Body,
  Form,
  Item as FormItem,
  Input,
  Label,
  Title,
  Content,
  Card,
} from 'native-base';
import styles from '../../Style';
import MyNovant from '../../system/MyNovant';

type Props = {
    onSubmit: ({ user, pass }: { user: string, pass: string }) => Promise<boolean>;
}

type State = { user: string, pass: string }

export default class LoginTemplate extends Component<Props, State> {
    state = {
        ...MyNovant.environment,
        // user: MyNovant.environment.user,
        // pass: '76565e20-7173-4d9d-a128-f587f86d3e7e'
    }
    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Body>
                        <Title testID="PageTitle">My Novant -- Login</Title>
                    </Body>
                </Header>
                <Content padder>
                    <Card>
                        <Body>
                            <Content padder>
                                <Text>Please provide your username and password.</Text>
                            </Content>
                        </Body>
                    </Card>
                    <Form>
                        <FormItem floatingLabel>
                            <Label>Username</Label>
                            <Input
                                onChangeText={(text) => this.setState({ user: text })}
                                value={this.state.user} 
                            />
                        </FormItem>
                        <FormItem floatingLabel>
                            <Label>Password</Label>
                            <Input
                                secureTextEntry={true}
                                onChangeText={(text) => this.setState({ pass: text })}
                                value={this.state.pass} 
                            />
                        </FormItem>

                        <Content padder style={{ marginTop: 40 }}>
                            <Button
                                full
                                primary
                                style={{ paddingBottom: 4 }}
                                onPress={() => this.props.onSubmit(this.state)}
                            >
                                <Text> Login </Text>
                            </Button>

                            <Button full light primary><Text> Sign Up </Text></Button>
                        </Content>
                    </Form>
                </Content>
            </Container>
        );
    }
} 