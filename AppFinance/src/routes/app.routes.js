import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';


import Home from "../pages/Home";
import New from "../pages/New";
import Profile from "../pages/Profile";


const AppDrawer = createDrawerNavigator();

function AppRoutes() {
    return (
        <AppDrawer.Navigator
            screenOptions={{
                headerShown: false,

                drawerStyle: {
                    backgroundColor: '#FFF',
                    paddingTop: 20,
                },
                drawerActiveBackgroundColor: '#2ccbb9',
                drawerActiveTintColor: '#FFF',

                drawerInactiveTintColor: '#2ccbb9',
                drawerInactiveBackgroundColor: '#FFF',
            }}
        >
         <AppDrawer.Screen name="Home" component={Home} />
        <AppDrawer.Screen name="Registrar" component={New} />
        <AppDrawer.Screen name="Perfil" component={Profile} />

        </AppDrawer.Navigator>
    );
    }

export default AppRoutes;