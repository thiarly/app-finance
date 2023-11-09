import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #F0F4FF;
`;


export const Input = styled.TextInput`
    height: 50px;
    width: 90%;
    background-color: #fff;
    font-size: 17px;
    padding: 0 8px;
    margin-bottom: 15px;
    border-radius: 4px;
`;


export const SubmitButton = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: #00b94a;
    border-radius: 4px;
`;


export const SubmitText = styled.Text`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
`;
