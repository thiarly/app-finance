import React, { createContext, useState, useEffect } from "react";

import api from "../services/api";
import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();

    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('@finToken');
    
            if (storageUser) {
                try {
                    const response = await api.get('/me', {
                        headers: {
                            Authorization: `Bearer ${storageUser}`
                        }
                    });
    
                    api.defaults.headers['Authorization'] = `Bearer ${storageUser}`;
                    setUser(response.data);
                } catch (error) {
                    setUser(null);
                    console.log("Erro ao carregar usuário:", error);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        }
    
        loadStorage();
    }, []);
    
  
    async function signUp(email, password, nome) {
        setLoadingAuth(true);

        try{
            const response = await api.post('/users', {
                name: nome,
                email: email,
                password: password,
            });
            
            setLoadingAuth(false);
            navigation.goBack();

        }catch(err){
            console.log("Erro ao cadstrar", err);
            setLoadingAuth(false);
        }
    }

    async function signIn(email, password) {
        setLoadingAuth(true);

        try{
            const response = await api.post('/login', {
                email: email,
                password: password,
            });
            
            const { id, name, token } = response.data;

            const data ={
                id,
                name,
                email,
                token,
            };

            await AsyncStorage.setItem('@finToken', token);

            api.defaults.headers['Authorization'] = `Bearer ${token}`;

            setUser({
                id,
                name,
                email,
            });

            setLoadingAuth(false);

        }catch(err){
            console.log("Erro ao logar", err);
            setLoadingAuth(false);
        }
    }

    return (
        <AuthContext.Provider value={{signed: !!user, user, signUp, signIn, loadingAuth, loading }}>
            {children}
        </AuthContext.Provider>
    );
    
}


export default AuthProvider;