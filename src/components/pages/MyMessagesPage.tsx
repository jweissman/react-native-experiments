import React from "react";
import MyNovantApi from "../../system/MyNovant";
import { Message } from "../../values/Message";
import NavTemplate from "../templates/NavTemplate";
import { NavProps } from "../../values/NavProps";
import { Text, Item, Input, Icon } from 'native-base';
import MessageCard from "../compounds/MessageCard";

type State = {messages: Message[], search: string }

class MyMessagesPage extends React.Component<NavProps, State> {
    state = {
        messages: [],
        search: ""
    }
    componentDidMount = async () => {
        this.setState({ 
            messages: await MyNovantApi.messages()
        });
    }

    matchingMessages = () => {
        return this.state.messages
            .filter(message =>
                [message.from.name, message.subject, message.text].
                    map(content => content.toLowerCase()).
                    find(messageElement =>
                        messageElement.includes(this.state.search.toLowerCase())
                    )
            )
    }

    render() {
        let { messages } = this.state;
        return messages && <NavTemplate
            pageTitle="My Messages"
            navigation={this.props.navigation}
        >
            <Item rounded style={{ backgroundColor: 'white', marginBottom: 12 }}>
                <Input
                    placeholder='Search'
                    value={this.state.search}
                    style={{marginLeft: 10}}
                    onChangeText={(text) => this.setState({ search: text })}
                />
                <Icon name="search" />
            </Item>

            {
                this.matchingMessages().map((message: Message) =>
                    <MessageCard
                        key={message.id}
                        {...message}
                    />
                )
            }
        </NavTemplate> || <Text>Loading</Text>
    }
}

export default MyMessagesPage;