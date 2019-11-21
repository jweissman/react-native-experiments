import React from 'react';
import { palette } from '../../Style';
import { Text, Left, Icon, Body, Content, Card, CardItem, View, Grid, Row, Col, Right } from 'native-base';
import { Image } from 'react-native';
import { Appointment } from '../../values/Appointment';
import moment from 'moment';

const upcase = (input: string) => input.toUpperCase()

export class AppointmentCard extends React.Component<Appointment> {
    render() {
        let borderRadius: number = 8;
        let { facility, provider, dateTime } = this.props;
        let timestamp = moment(dateTime); 
        return <Card style={{ borderRadius }}>
            <CardItem style={{borderRadius }}>
                <Left style={{ flex: 2.5 }}>
                    <Content style={{
                        backgroundColor: palette.wildsand,
                        borderRadius: 10,
                        margin: 5,
                        height: 100,
                    }}>
                        <View style={{
                            height: 100,
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}>
                            <View style={{
                                flexDirection: 'column',
                                alignItems: 'center',
                                display: 'flex',
                                height: '100%',
                                justifyContent: 'space-between',
                                paddingTop: 10,
                                paddingBottom: 10,
                            }}>
                                <Text style={{ fontSize: 18 }}>
                                    {upcase(timestamp.format('ddd'))}
                                </Text>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                    {timestamp.format("MMM D")}
                                </Text>
                                <Text style={{fontSize: 18}}>{timestamp.format("h:mm A")}</Text>
                            </View>
                        </View>
                    </Content>
                </Left>
                <Body style={{ flex: 5, padding: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 7 }}>
                        {this.props.type}
                    </Text>
                    <Grid style={{ width: '100%' }}>
                        <Row style={{ flex: 1 }}>
                            <Col style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flex: 1,
                                marginRight: 6,
                            }}>
                                <Image source={require("../../../assets/hospital.png")} />
                            </Col>
                            <Col style={{flex: 8, justifyContent: 'center'}}>
                                <Text style={{ color: 'black', fontSize: 14, fontWeight: '300' }}>
                                    {facility.name}
                                </Text>
                            </Col>
                        </Row>
                        <Row style={{ flex: 5 }}>
                            <Col style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flex: 1,
                                marginRight: 6,
                            }}>
                                <Image source={require("../../../assets/provider.png")} />
                            </Col>
                            <Col style={{flex: 8, justifyContent: 'center'}}>
                                <Text style={{ fontSize: 14, fontWeight: '300' }}>
                                    {provider.name}
                                </Text>
                            </Col>
                        </Row>
                    </Grid>
                </Body>
                <Right style={{flex: 0.2}}>
                    <Icon name='arrow-forward' />
                </Right>
            </CardItem>
        </Card>;
    }
}
