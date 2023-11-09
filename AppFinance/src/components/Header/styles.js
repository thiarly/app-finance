import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: 5px;
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
    max-height: 60px;
`;

export const Title = styled.Text`
    font-size: 22px;
    color: #000;
    margin-left: 8px;
`;



export const ButtonMenu = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;