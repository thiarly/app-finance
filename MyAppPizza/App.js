import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Container, Titulo, Nome, BotaoSujeito, TextoBotao} from './src/styles';


export default function App(){
  return (
    <Container>
      <Titulo>Pizzaria TC</Titulo>
      <Nome>Thiarly Cavalcante</Nome>

      <BotaoSujeito>
        <TextoBotao onPress={() => alert('Clicou!')}>Entrar</TextoBotao>
      </BotaoSujeito>
    </Container>
  );
}

