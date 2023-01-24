import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#64v4f6'
    },
    logo_pic :{
        height: Dimensions.get('window').height * 0.4,
        width: Dimensions.get('window').width * 0.9,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    logo_container: {
        flex: 1,
        justifyContent: 'center',
    },
    body_container: {
        flex: 1,
    },
});