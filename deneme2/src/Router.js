import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Products from './pages/Products';
import Detail from './pages/Detail';
import Login from "./pages/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./components/Loading/Loading";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createNativeStackNavigator();

const Router = () => {
    const userSession = useSelector(s => s.user)
    const isAuthLoading = useSelector(s => s.isAuthLoading);
    const dispatch = useDispatch();

    return (
        <NavigationContainer>
            {isAuthLoading ? (
                <Loading />
            ) : !userSession ? (
                <Stack.Navigator>
                    <Stack.Screen
                        name="LoginPage"
                        component={Login}
                        options={{
                            headerShown: false,
                        }} />
                </Stack.Navigator>
            ) : (
                <Stack.Navigator>
                    <Stack.Screen
                        name="ProductsPage"
                        component={Products}
                        options={{
                            title: 'Dükkan',
                            headerStyle: { backgroundColor: 'darkorange' },
                            headerTitleStyle: { color: 'black' },
                            headerTintColor: 'black',
                            headerRight: () => 
                            <Icon name="logout" 
                            size={30} 
                            color="black" 
                            onPress={() => dispatch({type: 'REMOVE_USER'})}/>,
                        }} />
                    <Stack.Screen
                        name="DetailsPage"
                        component={Detail}
                        options={{
                            title: 'Detay',
                            headerStyle: { backgroundColor: 'darkorange' },
                            headerTitleStyle: { color: 'black' },
                            headerTintColor: 'black',
                        }} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
};

export default Router;