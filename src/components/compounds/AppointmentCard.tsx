import React from 'react';
import { palette } from '../../Style';
import { Text, Left, Icon, Body, Content, Card, CardItem, View, Grid, Row, Col } from 'native-base';
import { Appointment } from '../../values/Appointment';
export class AppointmentCard extends React.Component<Appointment> {
    render() {
        let { facility, provider } = this.props;
    //    if (!facility || !provider) { return  <></> }
        // console.log("APPT CARD --", { facility, provider }); 
        return facility && provider && <Card>
            <CardItem>
                <Left style={{
                    flex: 1.2,
                }}>
                    <Content style={{
                        backgroundColor: palette.wildsand,
                        borderRadius: 10,
                        margin: 5,
                        height: 100,
                    }}>
                        <View style={{
                            height: 100, flexDirection: 'column', justifyContent: 'center',
                             }}>
                            <View style={{
                                flexDirection: 'column',
                                alignItems: 'center',
                                display: 'flex',
                            }}>
                                <Text>THURS</Text>
                                <Text style={{ fontWeight: 'bold' }}>
                                    Nov 31
                                </Text>
                                <Text style={{ }}>8:00 AM</Text>
                            </View>
                        </View>
                    </Content>
                </Left>
                <Body style={{ flex: 3, padding: 10 }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                        {this.props.type}
                    </Text>
                    <Grid>
                        <Col style={{ flex: 1 }}>
                            <Row>
                                <Icon name='map' />
                            </Row>
                            <Row>
                                <Icon name='briefcase' />
                            </Row>
                        </Col>
                        <Col style={{ flex: 5 }}>
                            <Row>
                                <Text style={{ color: 'black', fontSize: 14, fontWeight: '300' }}>
                                    {this.props.facility.name}
                                </Text>
                            </Row>
                            <Row>
                                <Text style={{ fontSize: 14, fontWeight: '300' }}>
                                    Snow Brenner Daws
                                </Text>
                            </Row>
                        </Col>
                    </Grid>
                </Body>
            </CardItem>
        </Card> || <></>;
    }
}
