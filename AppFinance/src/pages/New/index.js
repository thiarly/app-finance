import React, {useState} from 'react';
import { Background, Input, SubmitButton, SubmitText } from './styles';

import { SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Header from '../../components/Header';
import RegisterTypes from '../../components/ResgisterTypes';

export default function New() {
    const [labelInput, setLabelInput] = useState('');
    const [valueInput, setValueInput] = useState('');
    const [type, setType] = useState('receita');

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 
            <Background>
                <Header title="Registrando" />

                <SafeAreaView style={{marginTop: 25, alignItems: 'center'}}>
                    <Input
                        placeholder = "Descrição desse registro"
                        value={labelInput}
                        onChangeText={(text) => setLabelInput(text)}
                    />

                    <Input 
                        placeholder = "Valor desse registro"
                        keyboardType = "numeric"
                        value={valueInput}
                        onChangeText={(text) => setValueInput(text)}
                    />
                    <RegisterTypes type={type} sendTypeChanged={(item) => setType(item)}/>    

                    <SubmitButton>
                        <SubmitText>Registrar</SubmitText>
                    </SubmitButton>

                </SafeAreaView>
            </Background>
        </TouchableWithoutFeedback>
    );
}