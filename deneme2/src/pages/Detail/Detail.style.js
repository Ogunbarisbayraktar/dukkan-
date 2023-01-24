import { StyleSheet,Dimensions } from "react-native";

const deviceSize = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex: 1,
    },
    image:{
        width: deviceSize.width,
        height: deviceSize.height / 3,
    },
    title:{
        fontWeight: 'bold',
    },
    desc:{fontStyle: 'italic'},
    price:{fontWeight: 'bold',}
        

})