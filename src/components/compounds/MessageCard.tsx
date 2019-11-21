import React from "react";
import { Message } from "../../values/Message";
import { Card, CardItem, Left, View, Icon, Body, Text } from "native-base";
import { Image } from 'react-native';
import { palette } from "../../Style";
import moment from "moment";

export default class MessageCard extends React.Component<Message> {
    render() {
        let message = this.props;
        return <Card style={{borderRadius: 12}}>
                <CardItem style={{borderRadius: 12, height: 96}}>
                    <Left style={{flex: 1, height: '100%', justifyContent: 'center'}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                            <Image
                                style={{ width: 32, height: 32, borderRadius: 16, marginRight: 12 }}
                                source={{ uri: "https://source.unsplash.com/random?person" }} />
                        </View>
                    </Left>
                    <Body style={{ flex: 6, justifyContent: "space-between" }}>
                        <View 
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: '100%',
                                justifyContent: 'space-between',
                            }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontFamily: "Whitney_semi"
                                }}
                            >
                                {message.from.name}
                            </Text>
                            <View style={{
                                flexDirection: 'row',
                                height: 24,
                                alignItems: 'center',
                                // borderWidth: 1,
                                // borderColor: 'blue'
                            }}>
                                <Text
                                    style={{
                                        color: palette.warmGrey,
                                        fontSize: 15,
                                        marginRight: 6,
                                        // borderWidth: 1,
                                        // borderColor: 'red'
                                    }}
                                >{moment(message.dateTimeSent).format("h:mm")}</Text>
                                <Icon
                                    name="arrow-forward"
                                    style={{
                                        color: palette.aluminium,
                                        fontSize: 24,
                                        // borderWidth: 1,
                                        // borderColor: 'green'
                                    }}
                                />
                            </View>
                        </View>

                        <Text
                            style={{
                                fontSize: 18,
                                fontFamily: "Whitney_book"
                            }}
                        >
                            {message.subject}
                        </Text>

                        <Text
                            style={{
                                fontSize: 16,
                                fontFamily: "Whitney_book",
                                color: 'gray'
                            }}
                            numberOfLines={1}
                        >
                            {message.text}
                        </Text>
                    </Body>
                </CardItem>
            </Card>;
    }
}