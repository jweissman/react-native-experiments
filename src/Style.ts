import {StyleSheet, Platform, StatusBar} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...Platform.select({
            android: {
                marginTop: StatusBar.currentHeight
            }
        })
    },
    button: {
        justifyContent: "center",
        backgroundColor: '#f2c113',
        width: 200,
        height: 50,
        borderRadius: 5,
        margin: 10,
    },
    buttonText: {
        fontSize: 25,
        textAlign: "center",
    }
});

export default styles;