import react, {useContext, useState} from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { 
    Background, 
    Container, 
    AreaInput, 
    Input, 
    SubmitButton, 
    SubmitText 
} from '../SignIn/styles';

import { AuthContext } from '../../contexts/auth';

export default function SignUp(){

    const { signUp } = useContext(AuthContext);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignUp(){
        signUp(email, password, nome);
    }

    return(
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >

                <AreaInput>
                    <Input
                        placeholder="Nome"
                        value={nome}
                        onChangeText={ (text) => setNome(text) }
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Seu Email"
                        value={email}
                        onChangeText={ (text) => setEmail(text) }
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Sua Senha"
                        value={password}
                        onChangeText={ (text) => setPassword(text) }
                        secureTextEntry={true}
                    />
                </AreaInput>

                <SubmitButton activeOpacity={0.8} onPress={handleSignUp}>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>


            </Container>
        </Background>
    );
}