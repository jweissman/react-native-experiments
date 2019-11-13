import React from "react";
import {NavProps} from "../../values/NavProps";
import {Col, Container, Content, Footer, Grid, Header, Row, Text} from 'native-base';



const style = {
    purple: 'rgb(119,58,176)',
};

export class LoginPage extends React.Component<NavProps> {
    render() {
        return (
                <Container>
                    <Header>
                    </Header>
                    <Grid>
                        <Row><Text style={{color: 'black'}}>LOGO</Text></Row>
                        <Row><Text style={{color: 'white'}}>USER</Text></Row>
                        <Row><Text style={{color: 'white'}}>PASS</Text></Row>
                        <Row><Text style={{color: 'white'}}>LOGIN_BUTTON</Text></Row>
                        <Row><Text style={{color: 'white'}}>GAP</Text></Row>
                        <Row><Text style={{color: 'white'}}>PROVIDER_BUTTON</Text></Row>
                        <Row><Text style={{color: 'white'}}>LOCATION_BUTTON</Text></Row>
                    </Grid>
                </Container>
        )
    }

}