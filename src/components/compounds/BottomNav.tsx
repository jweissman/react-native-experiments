import React from 'react';
import { Text, Footer, FooterTab, Button, Icon, View } from 'native-base';
import { palette } from '../../Style';

type NavItem = {
    label: string,
    testID: string,
    onPress: () => void
    iconName: string
    active: boolean
    size?: 'normal' | 'large'
    wide?: boolean
}

// const renderTab
// const renderTheBigTab

class NavButton extends React.Component<NavItem> {
    render() {
        let { iconName, wide, size, active, testID, onPress, label } = this.props;
        let big = size && size === 'large';

        let iconColor = active ? palette.aubergine : palette.aluminium;
        let textColor = active ? palette.aubergine : palette.aluminium;
        if (big) {
            iconColor = palette.wildsand; //active ? 'white'
            textColor = active ? palette.aubergine : palette.aluminium;
        }
        // let inactiveIconColor = 'gray';
        // let activeTextColor = big ? 'gray' : 'purple';
        // let inactiveTextColor = 'gray';

        return <Button
            testID={testID}
            onPress={onPress}
            key={label}
            style={{ flex: wide ? 1.4 : 1 }}
        >
            {big && <View style={{
                backgroundColor: 'rgb(248,248,248)',
                width: 72, height: 72,
                position: 'absolute',
                borderRadius: 36,
                borderWidth: 1,
                borderTopColor: palette.alto,
                borderLeftColor: palette.alto,
                borderBottomColor: 'rgb(248,248,248)',
                borderRightColor: 'rgb(248,248,248)',
                top: -36,
                transform: [{ rotate: '45deg' }]
                }} />}
            {big && <View style={{
                backgroundColor: active ? palette.aubergine : palette.aluminium,
                width: 58, height: 58,
                position: 'absolute',
                borderRadius: 32,
                top: -28,
                }} />}
            <Icon
                name={iconName}
                style={{
                    ...(big && {
                        top: -30,
                        fontSize: 36,
                        marginBottom: -15,
                    }),
                    color: iconColor 
                }}
            />
            <Text
                style={{
                    fontSize: 10,
                    color: textColor ,
                }}
            >{label}</Text>
        </Button>
    }
}

type BottomNavProps = { items: NavItem[] }

class BottomNav extends React.Component<BottomNavProps> {
    render() {
        return <Footer testID="Footer">
            <FooterTab style={{
                // backgroundColor: 'white',
                // height: 200,
                flexDirection: 'row',
                alignContent: 'flex-end',
                justifyContent: 'flex-end',
            }}>
                {this.props.items.map(it => <NavButton key={it.label} {...it} />)}
            </FooterTab>
        </Footer>;
    }
}

export default BottomNav;