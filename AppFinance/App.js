import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import AuthProvider from './src/contexts/auth';

export default function App(){
    return(
        <NavigationContainer>
          <AuthProvider>
            <StatusBar barStyle="dark-content" backgroundColor="#7159c1" hidden={true} />
            <Routes />
          </AuthProvider>
        </NavigationContainer>
    );
}