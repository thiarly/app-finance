import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  background-color: #f1d1d1;
  align-items: center;
  justify-content: center;
`;

export const Titulo = styled.Text`
  font-size: 40px;
  color: #000;
  `;

  export const Nome = styled.Text`
    font-size: 20px;
    color: gray;
    font-weight: bold;
    `;

export const BotaoSujeito = styled.TouchableOpacity`
    margin-top: 20px;
    background-color: #000;
    padding: 10px;
    border-radius: 5px;
    width: 90%;
    `;

export const TextoBotao = styled.Text`
    color: #fff;
    font-size: 20px;
    text-align: center;
    `;