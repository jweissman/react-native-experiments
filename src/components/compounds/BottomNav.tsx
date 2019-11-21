import React from 'react';
import { Text, Footer, FooterTab, Button, Icon } from 'native-base';

type NavItem = {
    label: string,
    testID: string,
    onPress: () => void
    iconName: string
    active: boolean
}

type BottomNavProps = { items: NavItem[] }

class BottomNav extends React.Component<BottomNavProps> {
    render() {
        let activeColor = 'purple';
        let inactiveColor = 'gray';
        return <Footer testID="Footer">
            <FooterTab>
                {this.props.items.map(it => {
                    return <Button
                        testID={it.testID}
                        onPress={it.onPress}
                        key={it.label}
                    >
                        <Icon
                            name={it.iconName}
                            style={{
                                color: it.active
                                    ? activeColor
                                    : inactiveColor
                            }}
                        />
                        <Text
                            style={{
                                fontSize: 10,
                                color: it.active
                                    ? activeColor
                                    : inactiveColor
                            }}
                        >{it.label}</Text>
                    </Button>
                })}
            </FooterTab>
        </Footer>;
    }
}

export default BottomNav;