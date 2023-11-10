import styled from 'styled-components/native';


export const Container = styled.View`
    background-color: #F0F3FF;
    border-radius: 4px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 12px;
`;


export const TipoText = styled.Text`
    color: #fff;
    font-size: 16px;
    font-style: italic;
`;


export const Tipo = styled.View`
    flex-direction: row;
`;


export const IconView = styled.View`
    flex-direction: row;
    background-color: ${props => props.tipo === 'despesa' ? '#c62c36' : '#049301'};
    padding-bottom: 4px;
    padding-top: 4px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 4px;
`;


export const ValorText = styled.Text`
    color: #000;
    font-size: 20px;
    margin-top: 5px;
`;

