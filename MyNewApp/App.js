import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styled from 'styled-components/native';

export default function App(){
  return (
    <Container>
      <Text>Pizzaria TC</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #FF0000;
  align-items: center;
  justify-content: center;
`;