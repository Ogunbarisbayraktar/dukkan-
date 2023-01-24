import React from "react";
import { FlatList } from "react-native";
import Loading from '../../components/Loading/Loading';
import Error from "../../components/Error/Error";

import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';


const Products = ({navigation}) => {
    const { loading, data, error } = useFetch('https://fakestoreapi.com/products');

    const handleProductSelect = id => {
        navigation.navigate("DetailsPage", {id});
    };


    const renderProduct = ({ item }) => 
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)}/>;

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />
    }
    console.log(data);

    return (<FlatList
        data={data}
        renderItem={renderProduct} />
    )
}

export default Products;