import {StyleSheet, Platform, StatusBar} from 'react-native';

const palette = {
    aubergine: '#512D6D',   // grape
    fuschia: '#7c2bbb',     // blue-purple
    royalPurple: "#7841a5", // 'purply' 
    bossanova: '#3D2252',   // grape II (part deux)
    wildsand: '#f4f4f4',
    aluminium: "#a7a8aa",
    warmGrey: "#717171"
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...Platform.select({
            android: {
                marginTop: StatusBar.currentHeight
            }
        })
    },
    bodyText: {
      fontFamily: 'Whitney_book',
      fontSize: 24,
    },
    button: {
        justifyContent: "center",
        backgroundColor: palette.aubergine,
        borderRadius: 5,
        // marginRight: -15,
    },
    buttonText: {
        fontSize: 25,
        textAlign: "center",
    }
});

export default styles;
export { palette };