import Config from "react-native-config";
import React from "react";
import { View, Text,Image } from "react-native";
import styles from './Detail.style';
import useFetch from "../../hooks/useFetch";
import Loading from '../../components/Loading/Loading';
import Error from "../../components/Error/Error";

const Detail = ({route}) => {
    const {id} = route.params;
    const {loading, error, data} = useFetch(`${'https://fakestoreapi.com/products'}/${id}`);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />
    }

    return (
       <View style={styles.container}>
        <Image source={{uri: data.image}} style={styles.image} />
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.description}</Text>
        <Text style={styles.price}>{data.price}</Text>
       </View>
    );
};

export default Detail; 