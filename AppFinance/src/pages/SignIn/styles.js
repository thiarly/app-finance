import styled from 'styled-components/native';

export const Background = styled.View`
    flex:1;
    background-color: #f0f4ff;
`;


export const Container = styled.KeyboardAvoidingView`
    flex:1;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    margin-bottom: 25px;
`;

export const AreaInput = styled.View`
    flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(0,0,0,0.20)'
})`
    background: #fff;
    color: #222;
    font-size: 17px;
    border-radius: 7px;
    width: 90%;
    margin-bottom: 15px;
    padding: 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #3b3dbf;
    width: 90%;
    height: 45px;
    border-radius: 7px;
    margin-top: 10px;
`;

export const SubmitText = styled.Text`
    color: #fff;
    font-size: 20px;
`;

export const Link = styled.TouchableOpacity`
    margin-top: 5px;
    margin-bottom: 10px;
`;

export const LinkText = styled.Text`
    color: #000;
`;