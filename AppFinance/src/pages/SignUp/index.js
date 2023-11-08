import react, {useContext} from 'react';

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

    const [nome, setNome] = react.useState('');
    const [email, setEmail] = react.useState('');
    const [senha, setSenha] = react.useState('');
    
    return(
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >

                <AreaInput>
                    <Input
                        placeholder="Nome"
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Seu Email"
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Sua Senha"
                    />
                </AreaInput>

                <SubmitButton activeOpacity={0.8}>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>


            </Container>
        </Background>
    );
}