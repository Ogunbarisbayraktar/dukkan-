import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'pink',
        borderColor:'orange',
        borderWidth:2,
        margin: 10,
        flexDirection: 'row',
    },
    image:{
        width: 100,
        minHeight: 100,
        
    },
    body_container:{
        flex: 1,
        padding: 5,
        justifyContent: 'space-between',
    },
    title:{
        fontWeight:'bold',
        fontSize: 18,

    },
    price:{
        textAlign:'right',
        fontSize: 16,
    },
});