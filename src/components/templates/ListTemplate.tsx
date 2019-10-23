import React, { ReactNode } from 'react';
import { Text, Body, Title, Container, Content, List, Header, Left, Icon, Right, Button } from 'native-base';
import { NavProps } from '../../values/NavProps';

type ListEntry = { id: number }
type Props<T extends ListEntry> = {
    title: string,
    items: T[],
    renderItem: ({ item: T, index: number }) => ReactNode
    onNavigateBack: () => void
}

class ListTemplate<T extends ListEntry> extends React.Component<Props<T>> {
    render() {
        let { items, title, renderItem } = this.props;
        return <Container>
            <Header>
                <Left>
                    <Button
                        transparent
                        testID="GoBack"
                        onPress={this.props.onNavigateBack}
                    >
                        <Icon
                            active
                            name="arrow-back"
                            style={{ marginLeft: 10 }}
                        />
                        <Text>Back</Text>
                    </Button>
                </Left>
                <Body>
                    <Title testID="PageTitle">{title}</Title>
                </Body>
                <Right />
            </Header>
            <Content>
                <List
                    dataArray={items}
                    keyExtractor={it => String(it.id)}
                    renderItem={({ item, index }) =>
                        <>{renderItem({ item, index })}</>
                    }
                />
            </Content>
        </Container>;
    }
}

export default ListTemplate;